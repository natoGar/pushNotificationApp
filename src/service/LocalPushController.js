import PushNotification, {Importance} from "react-native-push-notification";


PushNotification.configure({
  onNotification: function (notification) {
    console.log("LOCAL NOTIFICATION:", notification);
  },
  popInitialNotification: true,
  requestPermissions: true,
});

PushNotification.createChannel(
  {
    channelId: "channel-id", // (required)
    channelName: "my Channel", // (required)
    channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
    playSound: true, // (optional) default: true
    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

PushNotification.getChannels(function (channel_ids) {
  console.log("Canales = ",channel_ids); // ['channel_id_1']
});

PushNotification.channelExists("fcm_fallback_notification_channel", function (exists) {
  console.log("Channel =  ",exists); // true/false
  return exists;
});


export const LocalNotification = () => {
  PushNotification.localNotification({
    channelId: "fcm_fallback_notification_channel", // (required)
    channelName: "myChannel", // (required)
    autoCancel:true,
    bigText:"This is a notification local",
    subText:"Local notificatiion",
    title:"Local Notification Title",
    message: "Hey , este en un mesage de pruebas", // (optional) default: undefined.
    playSound: true, // (optional) default: true
    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    importance:Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  })
}