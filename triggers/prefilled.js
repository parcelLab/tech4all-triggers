  /* ------------------------------ Filters ----------------------------- *
   * -------------- Please leave a comment on complex filters -----------
   */
  
  // const testCouriers = isCourier(['dhl-germany', 'hermes'])
  // const liveCouriers = isCourier('dpd')
  
  // const testCountries = isCountry(['DEU', 'FRA'])
  // const liveContries = isCountry('CHE')
  
  // const testClient = isClient(['shop1', 'shop2'])
  // const liveClient = isClient(['shop3', 'shop4'])
  
  const live = {
    $and: [
      {'delivery_info.return': {$eq: false}}
    ]
  }
  
  /* ------------------------------ Recipient slots ----------------------------- */
  
  const toRecipient = { customer: true, support: false, test: false, plTest: false, courierContact: true }
  const testToShopInbox = { customer: false, support: false, test: true, plTest: false, courierContact: true }
  const onlyTesting = { customer: false, support: false, test: false, plTest: true, courierContact: true }
  const testToSupport = { customer: false, support: true, test: false, plTest: false, courierContact: true }
  // const webhookRecipient = { theirs: true }
  
  /* ------------------------------ Trigger slots ----------------------------- *
   * These are the groups a trigger can be .push()ed into to activate it.
   */
  
  const onOrderCreated = []
  const onOrderUpdated = []
  const onTrackingCreated = []
  const onTrackingUpdated = []
  
  // see watchlist types
  const onInvalid = []
  const onForgotten = []
  
  // happy flow
  const onDispatch = []
  const onDeliveryStatus = []
  const onScheduled = []
  const onPickupReady = []
  const onReturnWarning = []
  const onDelivered = []
  
  // sad flow
  const onDelay = []
  const onException = []
  const onEscalation = []
  const onReturn = []
  
  const onCustomEvent = [] // special additional events
  const onTrackingClosed = []
  
  /* -------------------------- Trigger basic ------------------------- *
   * There is only our kickstarter set below.
   * Any other trigger-logic can be found in the trigger_doc.js.
   * Keep your trigger file clean and only use slots you really need and use.
   */
  
  /* -------------------------- Dispatch confirmation ------------------------- */
  
  onTrackingCreated.push({
    Trigger: '*',
    Channel: 'Mail',
    Message: 'DispatchConfirmation',
    LocaleMessage: true,
    Delay: 0,
    Recipient: onlyTesting,
    Filter: { $and: [live] }
  })
  
  /* -------------------- Delivery announcements/ Scheduled ------------------- */
  
  onScheduled.push({
    Trigger: '0', // first scheduled event
    Channel: 'Mail',
    Message: 'OutForDelivery',
    LocaleMessage: true,
    Delay: 0,
    Recipient: onlyTesting,
    Filter: { $and: [live] }
  })
  
  onScheduled.push({
    Trigger: '2,3', // second and third scheduled event, and yes there is no '1'
    Channel: 'Mail',
    Message: 'OutForDeliveryCorrection',
    LocaleMessage: true,
    Delay: 0,
    Recipient: onlyTesting,
    Filter: { $and: [live] }
  })
  
  /* --------------- Sad Flow events: sth didn't work as planned -------------- */
  
  onDeliveryStatus.push({
    Trigger: 'FailedAttemptFirst',
    Channel: 'Mail',
    Message: 'FailedAttempt',
    LocaleMessage: true,
    Delay: 0,
    Recipient: onlyTesting,
    Filter: { $and: [live] },
    AllowedNextAction: { // this can be used together with FailedAttempt
      PickUpReady: true,
      NewAttemptToday: true,
      NewAttemptNextDay: true,
      Empty: true // this is if no next action is specified (happens often)
    }
  })
  
  onDelay.push({
    Trigger: 'TimeIssue,AddressIssue,Misrouted,LackSpace,Exception', // ~> reasons for delays: how.parcellab.works
    Channel: 'Mail',
    Message: 'Delay',
    LocaleMessage: true,
    Delay: 0,
    Recipient: onlyTesting,
    Filter: { $and: [live] }
  })
  
  /* ------------------------------- Collection ------------------------------- */
  
  onPickupReady.push({
    Trigger: 'ParcelShop,ParcelLocker,Unknown,HomeDeposit,Neighbor', // delivery locations, how.parcellab.works
    Channel: 'Mail',
    Message: 'PickupReady',
    LocaleMessage: true,
    Delay: 0,
    Recipient: onlyTesting,
    Filter: { $and: [live] }
  })
  
  onReturnWarning.push({
    Trigger: 'ReturnWarning', // no trigger, this is always 'ReturnWarning'
    Channel: 'Mail',
    Message: 'ReturnWarning',
    LocaleMessage: true,
    Delay: 0,
    Recipient: onlyTesting,
    Filter: { $and: [live] }
  })
  
  /* ------------------------- Successfully delivered ------------------------- */
  
  onDelivered.push({
    Trigger: 'Doorstep,Postbox,ParcelShop,ParcelLocker,Unknown,HomeDeposit', // delivery locations, see above (Neighbor is never triggered here)
    Channel: 'Mail',
    Message: 'Delivered',
    LocaleMessage: true,
    Delay: 0,
    Recipient: onlyTesting,
    Filter: { $and: [live] },
  
    // if you only want to send once for a split order
    OncePerOrder: true,
    CompletelyDelivered: true
  })
  
  /* ------------------------- Never Delivered - Return ------------------------- */
  
  onReturn.push({
    Trigger: 'NotCollected,CustomerRefusal,DeliveryPayment,AddressIssue,Damaged,Exception,FailedDelivery,Unknown', // no trigger, this is always 'ReturnWarning'
    Channel: 'Mail',
    Message: 'ServiceNoticeReturnToSender',
    LocaleMessage: true,
    Delay: 0,
    Recipient: onlyTesting,
    Filter: { $and: [live] }
  })
  
  /* -------------------------------------------------------------------------- */
  /*                  Export and custom validations if required                 */
  /* -------------------------------------------------------------------------- */
  
  module.exports = {
    onOrderCreated,
    onOrderUpdated,
    onTrackingCreated,
    onTrackingUpdated,
    onInvalid,
    onForgotten,
    onDispatch,
    onDeliveryStatus,
    onScheduled,
    onPickupReady,
    onReturnWarning,
    onDelivered,
    onDelay,
    onException,
    onEscalation,
    onReturn,
    onCustomEvent,
    onTrackingClosed
  }
  