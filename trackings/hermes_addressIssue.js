const moment = require('moment')
const ObjectId = id => id
const ISODate = ts => moment(ts, 'YYYY-MM-DDTHH:mm:ss.sssZ').toDate()

module.exports = {
    "_id" : ObjectId("62670f04b53923a869939f60"),
    "updated" : ISODate("2022-05-03T09:28:50.501Z"),
    "user_id" : 1613928,
    "__v" : 0,
    "checkpoints" : [ 
        {
            "_id" : ObjectId("626b5342d7c4558b0ae91829"),
            "status_details" : "[15] (10)",
            "event_timestamp" : ISODate("2022-04-28T23:34:00.000Z"),
            "courier" : "hermes-de",
            "finger_print" : "bc6a877a15e32f1a2b3bf1a38d2938f8",
            "import_source_meta" : {
                "channel" : "file",
                "key" : "s3://importlocation/2022/04/29/HUM_STAT.20220429044128"
            },
            "matching" : {
                "Message" : "[15] (10)",
                "DeliveryStatus" : "InTransit",
                "IsInboundScan" : true
            },
            "created" : ISODate("2022-04-29T02:53:54.928Z")
        }, 
        {
            "_id" : ObjectId("626ca3803dd54d8b2274ac7e"),
            "status_details" : "[20] (00)",
            "event_timestamp" : ISODate("2022-04-29T23:28:00.000Z"),
            "courier" : "hermes-de",
            "finger_print" : "2dc75e98f687855e490fa0865fb17605",
            "import_source_meta" : {
                "channel" : "file",
                "key" : "s3://importlocation/2022/04/30/HUM_STAT.20220430044129"
            },
            "matching" : {
                "Message" : "[20] (00)",
                "DeliveryStatus" : "DestinationDeliveryDepot"
            },
            "created" : ISODate("2022-04-30T02:48:32.546Z")
        }, 
        {
            "_id" : ObjectId("626caf68a9e7463a3df74f1b"),
            "status_details" : "[30] (10)",
            "event_timestamp" : ISODate("2022-04-30T02:57:00.000Z"),
            "courier" : "hermes-de",
            "finger_print" : "d9803a1c20f89e2093095d4eed0bd741",
            "import_source_meta" : {
                "channel" : "file",
                "key" : "s3://importlocation/2022/04/30/HUM_STAT.20220430052832"
            },
            "matching" : {
                "Message" : "[30] (10)",
                "DeliveryStatus" : "Ignore"
            },
            "created" : ISODate("2022-04-30T03:39:20.546Z")
        }, 
        {
            "_id" : ObjectId("626caf694c8d6a3a1e2d34bc"),
            "status_details" : "[33] (00)",
            "event_timestamp" : ISODate("2022-04-30T02:57:00.000Z"),
            "courier" : "hermes-de",
            "finger_print" : "cd32e0042c2b3684400199469c5c5c6b",
            "import_source_meta" : {
                "channel" : "file",
                "key" : "s3://importlocation/2022/04/30/HUM_STAT.20220430052832"
            },
            "matching" : {
                "Message" : "[33] (00)",
                "DeliveryStatus" : "OutForDelivery"
            },
            "created" : ISODate("2022-04-30T03:39:21.230Z")
        }, 
        {
            "_id" : ObjectId("626cd84eb7cc72a62272e344"),
            "status_details" : "[30] (00)",
            "event_timestamp" : ISODate("2022-04-30T05:48:00.000Z"),
            "courier" : "hermes-de",
            "finger_print" : "fa7ef44540bf29399aecd232fc942f24",
            "import_source_meta" : {
                "channel" : "file",
                "key" : "s3://importlocation/2022/04/30/HUM_STAT.20220430082127"
            },
            "matching" : {
                "Message" : "[30] (00)",
                "DeliveryStatus" : "OutForDelivery"
            },
            "created" : ISODate("2022-04-30T06:33:50.745Z")
        }, 
        {
            "_id" : ObjectId("626f6f94ea0f4c8b31a9a80a"),
            "status_details" : "[40] (20)",
            "event_timestamp" : ISODate("2022-05-02T05:12:00.000Z"),
            "courier" : "hermes-de",
            "finger_print" : "a086a9150d5821cf0fbf02dfbd09e2e4",
            "import_source_meta" : {
                "channel" : "file",
                "key" : "s3://importlocation/2022/05/02/HUM_STAT.20220502073513"
            },
            "matching" : {
                "Message" : "[40] (20)",
                "DeliveryStatus" : "Exception",
                "Exception" : [ 
                    "AddressIssue"
                ]
            },
            "created" : ISODate("2022-05-02T05:43:48.662Z")
        }, 
        {
            "_id" : ObjectId("626f7576968f678b20f14521"),
            "status_details" : "[60] (83)",
            "event_timestamp" : ISODate("2022-05-02T05:42:00.000Z"),
            "courier" : "hermes-de",
            "finger_print" : "a10315b61174bc6877560f92f6235ae8",
            "import_source_meta" : {
                "channel" : "file",
                "key" : "s3://importlocation/2022/05/02/HUM_STAT.20220502080603"
            },
            "matching" : {
                "Message" : "[60] (83)",
                "DeliveryStatus" : "Exception",
                "Exception" : [ 
                    "AddressIssue"
                ]
            },
            "created" : ISODate("2022-05-02T06:08:54.628Z")
        }, 
        {
            "_id" : ObjectId("626fcd37b719c19ed1541afb"),
            "status_details" : "[40] (20)",
            "event_timestamp" : ISODate("2022-05-02T11:37:00.000Z"),
            "courier" : "hermes-de",
            "finger_print" : "58e19938c9a5a439e47e9c9a3291451c",
            "import_source_meta" : {
                "channel" : "file",
                "key" : "s3://importlocation/2022/05/02/HUM_STAT.20220502140858"
            },
            "matching" : {
                "Message" : "[40] (20)",
                "DeliveryStatus" : "Exception",
                "Exception" : [ 
                    "AddressIssue"
                ]
            },
            "created" : ISODate("2022-05-02T12:23:19.137Z")
        }, 
        {
            "_id" : ObjectId("6270f5d21dadcfba748c8f84"),
            "status_details" : "[45] (00)",
            "event_timestamp" : ISODate("2022-05-03T04:56:00.000Z"),
            "courier" : "hermes-de",
            "finger_print" : "2fbf7ed2f18105d3e6842628c576b155",
            "import_source_meta" : {
                "channel" : "file",
                "key" : "s3://importlocation/2022/05/03/HUM_STAT.20220503111615"
            },
            "matching" : {
                "Message" : "[45] (00)",
                "DeliveryStatus" : "Ignore"
            },
            "created" : ISODate("2022-05-03T09:28:50.502Z")
        }
    ],
    "recipient_id" : "a041bc65880b7dc11033de3f2c0c3fe8caec56f95268136c5381ff181e24c5d7",
    "uniqueness" : "hermes-de-01234567891234",
    "securityHash" : "secure",
    "destination_country_iso3" : "DEU",
    "zip_code" : "42842",
    "created" : ISODate("2022-04-25T21:13:40.021Z"),
    "isTransport" : false,
    "reporting" : {
        "invalid" : false,
        "forgotten" : false,
        "delayed" : true,
        "failedAttempt" : false,
        "dispatchDelayed" : false,
        "leadTimeExceeded" : false,
        "timeWindowMissed" : false,
        "escalated" : true,
        "returned" : false,
        "customerPromiseExceeded" : false,
        "contacted" : true,
        "contactedWithMessages" : [ 
            "DispatchConfirmation-de", 
            "Scheduled-de", 
            "Delay-de"
        ],
        "contactedAndBounce" : false,
        "exception_messages" : [ 
            "AddressIssue"
        ],
        "delivery_location" : "",
        "pickup_date" : ISODate("2022-04-28T23:34:00.000Z"),
        "in_transit_date" : ISODate("2022-04-28T23:34:00.000Z"),
        "lead_time_to_inbound" : 0,
        "lead_time_order_till_inbound" : 3
    },
    "delivery_info" : {
        "articles" : [ 
            {
                "articleNo" : "0964891001005",
                "price" : 15.99,
                "articleName" : "Skinny High Ankle Jeans",
                "articleImageUrl" : "https://assets.hm.com/articles/0964891001?assetType=DESCRIPTIVESTILLLIFE&rendition=medium&auth=AADB29C55A",
                "articleUrl" : "https://www2.hm.com/de_de/productpage.0964891001.html",
                "articleColor" : "Blau/Trashed",
                "articleSize" : "40",
                "quantity" : 1
            }
        ],
        "articlesOpen" : [],
        "complete" : true,
        "upgrade" : false,
        "cashOnDelivery" : 0,
        "doorstepDelivery" : true,
        "branchDelivery" : false,
        "return" : false,
        "client" : "H&M",
        "orderNo" : "ordernoo012312",
        "order_date" : ISODate("2022-04-25T00:00:00.000Z"),
        "xid" : "aordernoo012312",
        "consignmentNo" : "aordernoo012312",
        "customerNo" : "customerno012312",
        "courierServiceLevel" : "Home delivery",
        "warehouse" : "W237 - Boleslawiec",
        "recipient" : "Musterperson",
        "recipient_notification" : "Musterperson",
        "street" : "Münchner Str. 9",
        "city" : "Lauf a.d.Pegnitz",
        "language_iso3" : "de",
        "phone" : "+49176123512351",
        "email" : "musterperson@muster.com",
        "notificationsInactive" : false,
        "cancelled" : false,
        "customFields" : {
            "isDropship" : false,
            "deliveryMode" : "Standard delivery",
            "deliveryModeLocale" : "2-4 Werktage. Abhängig vom Versandunternehmen kann dein Paket auch abends zwischen 17-22 Uhr geliefert werden.",
            "deliveryMethod" : "Home delivery",
            "deliveryMethodLocale" : "Standardlieferung – nach Hause",
            "consignmentStatus" : "SHIPPED",
            "trackingUrl" : "https://watchmyparcel.com/hm/?Shipment.RefNo=ordernoo012312&Parcel.Identcode=01234567891234&Receiver.Postcode=91207",
            "returnLink" : null,
            "hasNewsletter" : false,
            "isMember" : true,
            "adTown" : "Lauf a.d.Pegnitz",
            "carrier" : "HERMES",
            "paymentModes" : [ 
                "OP"
            ],
            "packageNumber" : 1,
            "sellerName" : null,
            "corporateBrand" : "H&M",
            "corporateBrandId" : 0,
            "customerPromiseDeliverFrom" : "2022-04-28T06:00:00.000+02:00",
            "customerPromiseDeliverTo" : "2022-04-30T16:00:00.000+02:00",
            "customerPromiseMinDeliveryDays" : "3",
            "customerPromiseMaxDeliveryDays" : "5",
            "customerPromiseDescription" : "3-5 Werktage. Abhängig vom Versandunternehmen kann dein Paket auch abends zwischen 17-22 Uhr geliefert werden.",
            "DeliveryAddress" : "Musterperson, Münchner Str. 9, Lauf a.d.Pegnitz 91207, Deutschland"
        },
        "region" : "DE-BY",
        "timezone" : "Europe/Berlin"
    },
    "courier" : "hermes-de",
    "tracking_number" : "01234567891234",
    "service" : "import",
    "activity_monitor" : {
        "current_delivery_status" : "Exception",
        "last_update" : ISODate("2022-05-03T09:28:50.501Z")
    },
    "refreshed" : ISODate("2022-05-03T09:28:50.501Z")
}
