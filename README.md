# Welcome!

You can find sample trackings in the `trackings` folder and the triggers you're going to change in the `triggers` folder.

To easily test triggers, you can use the little main script that's included:

Just call the main.js with the name of the trigger and then the name of the tracking file, both without extensions!

`node main.js <triggerfile> <trackingfile>`

Example with real values:

`node main.js trigger hermes_addressIssue`

This will test every trigger in your trigger file and show you if the filter passes for the tracking you supplied.

```
adi@Aliouns-MBP tech4all-triggers % node main.js trigger hermes_addressIssue
Testing onTrackingCreated
 ↪ 0 Pass DispatchConfirmation

Testing onDeliveryStatus
 ↪ 0 Pass FailedAttempt

Testing onScheduled
 ↪ 0 Pass OutForDelivery
 ↪ 1 Pass OutForDeliveryCorrection

Testing onPickupReady
 ↪ 0 Pass PickupReady

Testing onReturnWarning
 ↪ 0 Pass ReturnWarning

Testing onDelivered
 ↪ 0 Pass Delivered

Testing onDelay
 ↪ 0 Pass Delay

Testing onReturn
 ↪ 0 Pass ServiceNoticeReturnToSender

```
_if you run this, you'll have fancy colours_
#
Happy Triggering!
