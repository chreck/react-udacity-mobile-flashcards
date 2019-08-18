/* global __DEV__ */
import { AsyncStorage } from 'react-native'
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'

const NOTIFICATION_KEY = 'FlashcardTnodeCh:notifications'

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: 'Take your quiz today!',
        body: "Don't forget to take your quiz 📇 today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification({tomorrow}) {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let now = new Date()
                            let date = new Date()
                            if (tomorrow == true || now.getHours() > 22) {
                                date.setDate(date.getDate() + 1)
                            } else {
                                date.setDate(date.getDate())
                            }
                            date.setHours(20)
                            date.setMinutes(0)

                            if (__DEV__) {
                                date = new Date()
                                date.setTime(now.getTime() + 1000 * 10) // in 10 seconds
                            }

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: date,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}