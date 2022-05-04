
  /* ------------------------------ Recipient slots ----------------------------- */
  
  const toRecipient = { customer: true, support: false, test: false, plTest: false, courierContact: true }
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
    
  /* -------------------------------------------------------------------------- */
  /*                         Trigger definitions go here                        */
  /* -------------------------------------------------------------------------- */

  onTrackingCreated.push({
    Trigger: '*',
    Channel: 'Mail',
    Message: 'DispatchConfirmation',
    LocaleMessage: true,
    Delay: 0,
    Recipient: onlyTesting,
    Filter: { }
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
  