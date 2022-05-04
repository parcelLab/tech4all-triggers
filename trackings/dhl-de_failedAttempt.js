const moment = require('moment')
const ObjectId = id => id
const ISODate = ts => moment(ts, 'YYYY-MM-DDTHH:mm:ss.sssZ').toDate()

module.exports = {
    "_id" : ObjectId("5e6cc27642492430198cb4b8"),
    "courier" : "dhl-germany",
    "tracking_number" : "00331612197202103141",
    "user_id" : 1612197,
    "__v" : 0,
    "checkpoints" : [ 
        {
            "_id" : ObjectId("607175b539fba73adf8f545b"),
            "status_details" : "ShopEvent-Notification of the delivery/pick-up of the shipment was given for the period 13.04.2021 12:00 h to 13.04.2021 16:00 h. (Type: telephone)",
            "event_timestamp" : ISODate("2022-05-02T02:51:28.254Z"),
            "courier" : "dhl-germany",
            "finger_print" : "fa8f789558d78c22e63799544ef80cbf",
            "created" : ISODate("2022-05-01T20:33:26.254Z")
        }, 
        {
            "_id" : ObjectId("607175f92a8f1f414fa98c69"),
            "status" : "nothing",
            "status_details" : "Notification of the delivery/pick-up of the shipment was given for the period 13.04.2021 12:00 h to 13.04.2021 16:00 h. (Type: telephone)",
            "event_timestamp" : ISODate("2022-05-02T03:51:28.254Z"),
            "country_iso3" : null,
            "zip_code" : null,
            "city" : null,
            "courier" : "dhl-germany",
            "finger_print" : "98aadfdd244a514d47e21dacf5c74fa3",
            "created" : ISODate("2022-05-01T20:34:33.254Z")
        }, 
        {
            "_id" : ObjectId("6071789539fba73adf8f7289"),
            "status" : "nothing",
            "status_details" : "Transferred through",
            "event_timestamp" : ISODate("2022-05-02T04:51:28.254Z"),
            "country_iso3" : null,
            "zip_code" : null,
            "city" : null,
            "courier" : "dhl-germany",
            "finger_print" : "010406b2d6ed3703243d50c6b49fe734",
            "matching" : {
                "Message" : "Transferred through *",
                "DeliveryStatus" : "InTransit"
            },
            "created" : ISODate("2022-05-01T20:45:41.254Z")
        }, 
        {
            "_id" : ObjectId("607178add00e7237a7d8554d"),
            "status" : "nothing",
            "status_details" : "Notification of the delivery/pick-up of the shipment was given for the period 14.04.2021 12:00 h to 13.04.2021 16:00 h. (Type: telephone)",
            "event_timestamp" : ISODate("2022-05-02T05:51:28.254Z"),
            "country_iso3" : null,
            "zip_code" : null,
            "city" : null,
            "courier" : "dhl-germany",
            "finger_print" : "e30a4be4759717c6c8eaaafd34a56d6b",
            "created" : ISODate("2022-05-01T20:46:05.254Z")
        }, 
        {
            "_id" : ObjectId("60717a52a6179038026ed075"),
            "status" : "nothing",
            "status_details" : "Die Sendung konnte nicht zugestellt werden und wird in die Filiale gebracht. Für die Abholung ist neben der Benachrichtigung die Vorlage Ihres Ausweises sowie ggf. eine Vollmacht erforderlich.",
            "event_timestamp" : ISODate("2022-05-02T06:51:28.254Z"),
            "country_iso3" : null,
            "zip_code" : null,
            "city" : null,
            "courier" : "dhl-germany",
            "finger_print" : "1349c079c400d489f166d37c1d9e9aa2",
            "matching" : {
                "Message" : "Die Sendung konnte nicht zugestellt werden und wird in die Filiale gebracht. Für die Abholung ist neben der Benachrichtigung die Vorlage Ihres Ausweises sowie ggf. eine Vollmacht erforderlich.",
                "DeliveryStatus" : "FailedAttemptFirst",
                "Exception" : [ 
                    "FailedAttempt"
                ],
                "NextAction" : "PickUpReady"
            },
            "created" : ISODate("2022-05-01T20:53:06.254Z")
        }
    ],
    "import_source_meta" : {
        "channels" : {
            "api" : [],
            "file" : [],
            "email" : []
        }
    },
    "recipient_id" : "a6d96fb62e71ddae93616e989880e5d4587f591af56ed0170745f803a63b0f3c",
    "uniqueness" : "dhl-germany-00331612197202103141",
    "securityHash" : "791c40d3",
    "destination_country_iso3" : "DEU",
    "zip_code" : "12345",
    "created" : ISODate("2022-05-01T20:33:26.254Z"),
    "isTransport" : false,
    "reporting" : {
        "invalid" : false,
        "forgotten" : false,
        "delayed" : false,
        "failedAttempt" : true,
        "dispatchDelayed" : false,
        "leadTimeExceeded" : false,
        "timeWindowMissed" : false,
        "escalated" : false,
        "returned" : false,
        "customerPromiseExceeded" : false,
        "contacted" : true,
        "contactedWithMessages" : [ 
            "DispatchConfirmation"
        ],
        "contactedAndBounce" : false,
        "exception_messages" : [ 
            "FailedAttempt"
        ],
        "delivery_location" : "",
        "lead_time" : -1,
        "lead_time_first_attempt" : 0,
        "lead_time_door_to_door" : 0,
        "lead_time_dispatch_delta" : -1,
        "lead_time_since_order" : -1,
        "lead_time_to_inbound" : 0,
        "pickup_date" : ISODate("2022-05-03T13:33:26.254Z"),
        "in_transit_date" : ISODate("2021-04-10T18:12:00.000Z"),
        "courier_dropoff_date" : ISODate("2021-04-10T20:12:00.000Z")
    },
    "delivery_info" : {
        "articles" : [],
        "articlesOpen" : [],
        "complete" : true,
        "upgrade" : false,
        "cashOnDelivery" : 0,
        "doorstepDelivery" : true,
        "branchDelivery" : false,
        "return" : false,
        "city" : "Berlin",
        "deliveryNo" : "50XX000004",
        "orderNo" : "780XX004",
        "email" : "julian@parcellab.com",
        "recipient_notification" : "Julian Krenge",
        "recipient" : "parcelLab GmbH, Julian Krenge",
        "street" : "Schillerstr. 23a",
        "order_date" : ISODate("2022-05-02T23:33:26.254Z"),
        "client" : "1125",
        "region" : "DE-BE",
        "timezone" : "Europe/Berlin",
        "announced_delivery_date" : ISODate("2022-05-04T20:33:26.254Z")
    },
    "service" : "slimshady",
    "activity_monitor" : {
        "last_update" : ISODate("2021-04-10T10:13:38.401Z"),
        "current_delivery_status" : "FailedAttemptFirst"
    },
    "updated" : ISODate("2021-04-10T10:13:38.405Z"),
    "refreshed" : ISODate("2021-04-10T10:13:38.405Z")
}
