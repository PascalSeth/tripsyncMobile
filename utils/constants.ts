// API Base URL
export const API_URL = "https://tripsync-backend-3v2v.onrender.com/api";

// Authentication Endpoints
export const AUTH_ENDPOINTS = {
  // Registers a new user, creates account in Clerk, stores user details in database, returns JWT
  REGISTER: `${API_URL}/auth/register`,
  // Authenticates user with email/password, verifies with Clerk and database, returns JWT
  LOGIN: `${API_URL}/auth/login`,
  // Registers a driver with user details and driver-specific info (license, ID, etc.), returns JWT
  DRIVER_REGISTER: `${API_URL}/auth/driver/register`,
};

// User Endpoints
export const USER_ENDPOINTS = {
  // Retrieves authenticated user's profile information
  PROFILE: `${API_URL}/users/profile`,
  // Updates authenticated user's profile details (e.g., name, phone)
  UPDATE_PROFILE: `${API_URL}/users/profile`,
  // Adds a new favorite location for the authenticated user
  FAVORITE_LOCATIONS: `${API_URL}/users/favorite-locations`,
  // Retrieves list of all users (admin-only)
  ADMIN_USERS: `${API_URL}/admin/users`,
  // Retrieves details of a specific user by ID (admin-only)
  ADMIN_USER_BY_ID: (id: string) => `${API_URL}/admin/users/${id}`,
  // Updates a user's status (e.g., active, suspended) (admin-only)
  ADMIN_UPDATE_USER_STATUS: (id: string) => `${API_URL}/admin/users/${id}/status`,
  // Updates a user's verification status (admin-only)
  ADMIN_UPDATE_USER_VERIFICATION: (id: string) => `${API_URL}/admin/users/${id}/verification`,
  // Retrieves analytics for a specific user (e.g., activity metrics) (admin-only)
  ADMIN_USER_ANALYTICS: (id: string) => `${API_URL}/admin/users/${id}/analytics`,
  // Deletes a user's account (admin-only)
  ADMIN_DELETE_USER: (id: string) => `${API_URL}/admin/users/${id}`,
  // Provides overall user statistics (e.g., total users, engagement) (admin-only)
  ADMIN_USERS_ANALYTICS: `${API_URL}/admin/users/analytics`,
};

// Driver Endpoints
export const DRIVER_ENDPOINTS = {
  // Creates a new driver profile for authenticated user
  PROFILE: `${API_URL}/drivers`,
  // Updates authenticated driver's profile information
  UPDATE_PROFILE: `${API_URL}/drivers`,
  // Updates driver's status (e.g., online, offline, on trip, break)
  STATUS: `${API_URL}/drivers/status`,
  // Registers a new driver (similar to AUTH_ENDPOINTS.DRIVER_REGISTER)
  REGISTER: `${API_URL}/drivers/register`,
  // Updates driver profile (alias for UPDATE_PROFILE)
  UPDATE_PROFILE_ALIAS: `${API_URL}/drivers/profile`,
  // Retrieves driver profile (alias for PROFILE)
  GET_PROFILE: `${API_URL}/drivers/profile`,
  // Deletes driver's profile
  DELETE_PROFILE: `${API_URL}/drivers/profile`,
  // Uploads driver documents (e.g., license, ID) for verification
  UPLOAD_DOCUMENTS: `${API_URL}/drivers/upload-documents`,
  // Retrieves driver's uploaded documents
  GET_DOCUMENTS: `${API_URL}/drivers/documents`,
  // Updates driver's current location
  UPDATE_LOCATION: `${API_URL}/drivers/location`,
  // Retrieves driver's current location
  GET_LOCATION: `${API_URL}/drivers/location`,
  // Assigns service districts to driver
  ADD_DISTRICTS: `${API_URL}/drivers/districts`,
  // Retrieves driver's assigned districts
  GET_DISTRICTS: `${API_URL}/drivers/districts`,
  // Updates custom pricing/settings for a specific district
  UPDATE_DISTRICT: (districtId: string) => `${API_URL}/drivers/districts/${districtId}`,
  // Removes a district from driver's service areas
  DELETE_DISTRICT: (districtId: string) => `${API_URL}/drivers/districts/${districtId}`,
  // Assigns service types (e.g., ride-hailing, delivery) to driver
  ADD_SERVICE_TYPES: `${API_URL}/drivers/service-types`,
  // Retrieves driver's assigned service types
  GET_SERVICE_TYPES: `${API_URL}/drivers/service-types`,
  // Toggles active status of a service type for driver
  UPDATE_SERVICE_TYPE: (id: string) => `${API_URL}/drivers/service-types/${id}`,
  // Removes a service type from driver
  DELETE_SERVICE_TYPE: (id: string) => `${API_URL}/drivers/service-types/${id}`,
  // Adds a vehicle to driver's profile
  ADD_VEHICLE: `${API_URL}/drivers/vehicle`,
  // Retrieves driver's vehicle details
  GET_VEHICLE: `${API_URL}/drivers/vehicle`,
  // Updates driver's vehicle information
  UPDATE_VEHICLE: `${API_URL}/drivers/vehicle`,
  // Removes a vehicle from driver's profile
  DELETE_VEHICLE: `${API_URL}/drivers/vehicle`,
  // Retrieves driver's earnings (daily/weekly/monthly)
  EARNINGS: `${API_URL}/drivers/earnings`,
  // Provides summary of driver's earnings
  EARNINGS_SUMMARY: `${API_URL}/drivers/earnings/summary`,
  // Retrieves driver's performance metrics (e.g., trip count, ratings)
  ANALYTICS: `${API_URL}/drivers/analytics`,
  // Retrieves driver's trip history
  TRIPS: `${API_URL}/drivers/trips`,
  // Retrieves driver's currently active trips
  ACTIVE_TRIPS: `${API_URL}/drivers/trips/active`,
  // Retrieves list of all drivers (admin-only)
  ADMIN_DRIVERS: `${API_URL}/admin/drivers`,
  // Retrieves drivers pending approval (admin-only)
  ADMIN_PENDING_DRIVERS: `${API_URL}/admin/drivers/pending`,
  // Approves or rejects a driver's registration (admin-only)
  ADMIN_APPROVE_DRIVER: (id: string) => `${API_URL}/admin/drivers/${id}/approve`,
  // Updates driver's approval status (admin-only)
  ADMIN_UPDATE_DRIVER_STATUS: (id: string) => `${API_URL}/admin/drivers/${id}/status`,
  // Provides overall driver statistics (admin-only)
  ADMIN_DRIVERS_ANALYTICS: `${API_URL}/admin/drivers/analytics`,
};

// Location Endpoints
export const LOCATION_ENDPOINTS = {
  // Creates a new location entry
  CREATE: `${API_URL}/locations`,
  // Retrieves all locations for the authenticated user
  GET_ALL: `${API_URL}/locations`,
  // Geocodes an address to coordinates using Mapbox
  GEOCODE: `${API_URL}/locations/geocode`,
  // Reverse geocodes coordinates to an address
  REVERSE_GEOCODE: `${API_URL}/locations/reverse-geocode`,
  // Retrieves route details between two points
  ROUTE: `${API_URL}/locations/route`,
  // Finds nearby locations based on coordinates
  NEARBY: `${API_URL}/locations/nearby`,
  // Checks if a location is within a specific zone
  CHECK_IN_ZONE: (locationId: string, zoneId: string) => `${API_URL}/locations/${locationId}/in-zone/${zoneId}`,
};

// Service Endpoints
export const SERVICE_ENDPOINTS = {
  // Requests a new ride
  REQUEST: `${API_URL}/services/request`,
  // Driver accepts a ride request
  ACCEPT: `${API_URL}/services/accept`,
  // Updates the status of a service (e.g., in progress, completed)
  UPDATE_STATUS: `${API_URL}/services/status`,
  // Updates driver's current location during a service
  DRIVER_LOCATION: `${API_URL}/services/driver/location`,
  // Retrieves service history for the authenticated user
  HISTORY: `${API_URL}/services/history`,
  // Retrieves details of a specific service by ID
  GET_BY_ID: (id: string) => `${API_URL}/services/${id}`,
  // Retrieves service performance metrics (admin-only)
  ANALYTICS: `${API_URL}/services/analytics`,
  // Retrieves revenue analytics for services (admin-only)
  REVENUE_ANALYTICS: `${API_URL}/services/analytics/revenue`,
  // Retrieves demand patterns for services (admin-only)
  DEMAND_ANALYTICS: `${API_URL}/services/analytics/demand`,
};

// Taxi Endpoints
export const TAXI_ENDPOINTS = {
  // Books a taxi for the authenticated user
  BOOK: `${API_URL}/taxis/book`,
  // Retrieves all taxi zones
  ZONES: `${API_URL}/taxi-zones`,
  // Calculates zone-based pricing
  PRICE: `${API_URL}/taxi-zones/price`,
  // Retrieves all taxi stands
  STANDS: `${API_URL}/taxi-stands`,
  // Finds nearby taxi stands based on location
  NEARBY_STANDS: `${API_URL}/taxi-stands/nearby`,
  // Creates a new taxi (admin-only)
  CREATE: `${API_URL}/taxis`,
  // Retrieves all taxis (admin-only)
  GET_ALL: `${API_URL}/taxis`,
  // Retrieves details of a specific taxi by ID (admin-only)
  GET_BY_ID: (id: string) => `${API_URL}/taxis/${id}`,
  // Updates a taxi's details (admin-only)
  UPDATE: (id: string) => `${API_URL}/taxis/${id}`,
  // Deletes a taxi (admin-only)
  DELETE: (id: string) => `${API_URL}/taxis/${id}`,
  // Retrieves nearby taxis based on location
  NEARBY: `${API_URL}/taxis/nearby`,
  // Updates a taxi's current location
  UPDATE_LOCATION: (id: string) => `${API_URL}/taxis/${id}/location`,
};

// Taxi Stand Endpoints
export const TAXI_STAND_ENDPOINTS = {
  // Creates a new taxi stand (admin-only)
  CREATE: `${API_URL}/taxi-stands`,
  // Retrieves all taxi stands
  GET_ALL: `${API_URL}/taxi-stands`,
  // Retrieves details of a specific taxi stand
  GET_BY_ID: (id: string) => `${API_URL}/taxi-stands/${id}`,
  // Updates a taxi stand's details (admin-only)
  UPDATE: (id: string) => `${API_URL}/taxi-stands/${id}`,
  // Deletes a taxi stand (admin-only)
  DELETE: (id: string) => `${API_URL}/taxi-stands/${id}`,
};

// Taxi Zone Endpoints
export const TAXI_ZONE_ENDPOINTS = {
  // Creates a new taxi zone (admin-only)
  CREATE: `${API_URL}/taxi-zones`,
  // Retrieves all taxi zones
  GET_ALL: `${API_URL}/taxi-zones`,
  // Retrieves details of a specific taxi zone
  GET_BY_ID: (id: string) => `${API_URL}/taxi-zones/${id}`,
  // Retrieves analytics for a specific taxi zone (admin-only)
  ANALYTICS: (id: string) => `${API_URL}/taxi-zones/${id}/analytics`,
  // Updates a taxi zone's details (admin-only)
  UPDATE: (id: string) => `${API_URL}/taxi-zones/${id}`,
  // Deletes a taxi zone (admin-only)
  DELETE: (id: string) => `${API_URL}/taxi-zones/${id}`,
  // Finds the taxi zone for a given location
  FIND_FOR_LOCATION: `${API_URL}/taxi-zones/find-for-location`,
  // Retrieves overlapping taxi zones
  GET_OVERLAP: (zoneId: string) => `${API_URL}/taxi-zones/${zoneId}/overlaps`,
};

// Shared Ride Endpoints
export const SHARED_RIDE_ENDPOINTS = {
  // Estimates the cost of a shared ride
  ESTIMATE: `${API_URL}/shared-rides/estimate`,
  // Books a shared ride
  BOOK: `${API_URL}/shared-rides/book`,
  // Retrieves details of a specific shared ride
  GET_BY_ID: (id: string) => `${API_URL}/shared-rides/${id}`,
  // Checks the status of a shared ride group
  CHECK_STATUS: (id: string) => `${API_URL}/shared-rides/${id}/status`,
  // Allows a user to leave a shared ride
  LEAVE: (id: string) => `${API_URL}/shared-rides/${id}/leave`,
  // Retrieves all shared ride groups
  GROUPS: `${API_URL}/shared-rides/groups`,
  // Retrieves details of a specific shared ride group
  GROUP_BY_ID: (id: string) => `${API_URL}/shared-rides/groups/${id}`,
  // Updates a shared ride group
  UPDATE_GROUP: (id: string) => `${API_URL}/shared-rides/groups/${id}`,
  // Deletes a shared ride group
  DELETE_GROUP: (id: string) => `${API_URL}/shared-rides/groups/${id}`,
  // Finds matching shared rides
  MATCH: `${API_URL}/shared-rides/match`,
  // Retrieves available shared rides
  AVAILABLE: `${API_URL}/shared-rides/available`,
};

// Day Booking Endpoints
export const DAY_BOOKING_ENDPOINTS = {
  // Checks driver availability for a district and date
  AVAILABILITY: `${API_URL}/day-booking/availability`,
  // Retrieves pricing for day booking
  PRICING: `${API_URL}/day-booking/pricing`,
  // Books a driver for a full day
  BOOK: `${API_URL}/day-booking/book`,
  // Retrieves day booking history
  HISTORY: `${API_URL}/day-booking/history`,
  // Sets driver price for day booking (driver-only)
  SET_PRICE: `${API_URL}/day-booking/set-price`,
  // Sets driver schedule for day booking (driver-only)
  SET_SCHEDULE: `${API_URL}/day-booking/schedule`,
};

// Store Endpoints
export const STORE_ENDPOINTS = {
  // Creates a new store
  CREATE: `${API_URL}/stores`,
  // Updates a store's details
  UPDATE: (id: string) => `${API_URL}/stores/${id}`,
  // Retrieves details of a specific store
  GET_BY_ID: (id: string) => `${API_URL}/stores/${id}`,
  // Lists all stores
  LIST: `${API_URL}/stores`,
  // Adds a product to a store
  ADD_PRODUCT: (storeId: string) => `${API_URL}/stores/${storeId}/products`,
  // Updates a product in a store
  UPDATE_PRODUCT: (storeId: string, id: string) => `${API_URL}/stores/${storeId}/products/${id}`,
  // Lists products in a store
  LIST_PRODUCTS: (storeId: string) => `${API_URL}/stores/${storeId}/products`,
  // Retrieves details of a specific product
  GET_PRODUCT: (storeId: string, id: string) => `${API_URL}/stores/${storeId}/products/${id}`,
  // Deletes a store
  DELETE: (id: string) => `${API_URL}/stores/${id}`,
  // Retrieves store performance analytics
  ANALYTICS: (id: string) => `${API_URL}/stores/${id}/analytics`,
  // Searches products across all stores
  SEARCH_PRODUCTS: `${API_URL}/products/search`,
  // Updates product stock status
  UPDATE_STOCK: (id: string) => `${API_URL}/products/${id}/stock`,
};

// Delivery Endpoints
export const DELIVERY_ENDPOINTS = {
  // Estimates delivery cost
  ESTIMATE: `${API_URL}/delivery/estimate`,
  // Creates a new delivery order
  ORDER: `${API_URL}/delivery/order`,
  // Retrieves details of a specific delivery
  GET_BY_ID: (id: string) => `${API_URL}/delivery/${id}`,
  // Retrieves delivery history
  HISTORY: `${API_URL}/delivery/history`,
  // Updates delivery status (driver-only)
  UPDATE_STATUS: (id: string) => `${API_URL}/delivery/${id}/status`,
  // Retrieves all orders with filters
  LIST_ORDERS: `${API_URL}/orders`,
  // Retrieves details of a specific order
  GET_ORDER: (id: string) => `${API_URL}/orders/${id}`,
  // Updates order status
  UPDATE_ORDER_STATUS: (id: string) => `${API_URL}/orders/${id}/status`,
  // Retrieves order analytics
  ORDER_ANALYTICS: `${API_URL}/orders/analytics`,
};

// Emergency Endpoints
export const EMERGENCY_ENDPOINTS = {
  // Requests an emergency service
  REQUEST: `${API_URL}/emergency/request`,
  // Retrieves details of a specific emergency service
  GET_BY_ID: (id: string) => `${API_URL}/emergency/${id}`,
  // Retrieves emergency service history
  HISTORY: `${API_URL}/emergency/history`,
  // Cancels an emergency request
  CANCEL: (id: string) => `${API_URL}/emergency/${id}/cancel`,
  // Updates emergency service status (driver-only)
  UPDATE_STATUS: (id: string) => `${API_URL}/emergency/${id}/status`,
  // Retrieves all emergency services
  LIST_SERVICES: `${API_URL}/emergency/services`,
  // Retrieves emergency response analytics
  ANALYTICS: `${API_URL}/emergency/analytics`,
  // Retrieves available emergency responders
  RESPONDERS: `${API_URL}/emergency/responders`,
  // Adds a new emergency responder (admin-only)
  ADD_RESPONDER: `${API_URL}/emergency/responders`,
  // Updates an emergency responder (admin-only)
  UPDATE_RESPONDER: (id: string) => `${API_URL}/emergency/responders/${id}`,
  // Removes an emergency responder (admin-only)
  DELETE_RESPONDER: (id: string) => `${API_URL}/emergency/responders/${id}`,
};

// House Moving Endpoints
export const HOUSE_MOVING_ENDPOINTS = {
  // Retrieves all moving companies
  COMPANIES: `${API_URL}/house-moving/companies`,
  // Estimates moving cost
  ESTIMATE: `${API_URL}/house-moving/estimate`,
  // Books a moving service
  BOOK: `${API_URL}/house-moving/book`,
  // Retrieves details of a specific moving service
  GET_BY_ID: (id: string) => `${API_URL}/house-moving/${id}`,
  // Updates inventory items for a moving service
  UPDATE_INVENTORY: (id: string) => `${API_URL}/house-moving/${id}/inventory`,
  // Tracks a moving service
  TRACK: (id: string) => `${API_URL}/house-moving/${id}/track`,
  // Cancels a moving service
  CANCEL: (id: string) => `${API_URL}/house-moving/${id}/cancel`,
  // Updates moving service status (driver-only)
  UPDATE_STATUS: (id: string) => `${API_URL}/house-moving/${id}/status`,
  // Creates a new moving company (admin-only)
  CREATE_COMPANY: `${API_URL}/moving-companies`,
  // Updates a moving company (admin-only)
  UPDATE_COMPANY: (id: string) => `${API_URL}/moving-companies/${id}`,
  // Deletes a moving company (admin-only)
  DELETE_COMPANY: (id: string) => `${API_URL}/moving-companies/${id}`,
  // Retrieves services offered by a moving company
  COMPANY_SERVICES: (id: string) => `${API_URL}/moving-companies/${id}/services`,
  // Retrieves all moving services
  LIST_SERVICES: `${API_URL}/house-moving/services`,
  // Retrieves inventory items for a moving service
  GET_INVENTORY: (id: string) => `${API_URL}/house-moving/${id}/inventory`,
};

// Recommendation Endpoints
export const RECOMMENDATION_ENDPOINTS = {
  // Retrieves all place categories
  CATEGORIES: `${API_URL}/recommendations/categories`,
  // Retrieves places by category
  PLACES: `${API_URL}/recommendations/places`,
  // Retrieves details of a specific place
  PLACE_BY_ID: (id: string) => `${API_URL}/recommendations/places/${id}`,
  // Retrieves personalized place recommendations
  FOR_ME: `${API_URL}/recommendations/for-me`,
  // Starts a new place survey
  SURVEY: `${API_URL}/recommendations/survey`,
  // Submits a vote for a place in a survey
  VOTE: (id: string) => `${API_URL}/recommendations/survey/${id}/vote`,
  // Completes a survey
  COMPLETE_SURVEY: (id: string) => `${API_URL}/recommendations/survey/${id}/complete`,
};

// Anonymous Endpoints
export const ANONYMOUS_ENDPOINTS = {
  // Creates an anonymous user
  CREATE: `${API_URL}/anonymous/create`,
  // Retrieves preferences for an anonymous user
  PREFERENCES: (id: string) => `${API_URL}/anonymous/${id}/preferences`,
  // Starts a survey for an anonymous user
  SURVEY: (id: string) => `${API_URL}/anonymous/${id}/survey`,
  // Submits a place vote in an anonymous user’s survey
  VOTE: (id: string, surveyId: string) => `${API_URL}/anonymous/${id}/survey/${surveyId}/vote`,
  // Completes an anonymous user’s survey
  COMPLETE_SURVEY: (id: string, surveyId: string) => `${API_URL}/anonymous/${id}/survey/${surveyId}/complete`,
  // Retrieves recommended places for an anonymous user
  RECOMMENDATIONS: (id: string) => `${API_URL}/anonymous/${id}/recommendations`,
};

// Payment Endpoints
export const PAYMENT_ENDPOINTS = {
  // Initializes a payment
  INITIALIZE: `${API_URL}/payments/initialize`,
  // Verifies a payment via webhook
  WEBHOOK: `${API_URL}/payments/webhook`,
  // Processes a payment
  PROCESS: `${API_URL}/payments/process`,
  // Retrieves all payments
  LIST: `${API_URL}/payments`,
  // Retrieves details of a specific payment
  GET_BY_ID: (id: string) => `${API_URL}/payments/${id}`,
  // Updates a payment’s status
  UPDATE: (id: string) => `${API_URL}/payments/${id}`,
  // Issues a refund for a payment
  REFUND: (id: string) => `${API_URL}/payments/${id}/refund`,
  // Retrieves payment analytics
  ANALYTICS: `${API_URL}/payments/analytics`,
  // Retrieves available payment methods
  METHODS: `${API_URL}/payment-methods`,
  // Adds a new payment method (admin-only)
  ADD_METHOD: `${API_URL}/payment-methods`,
  // Updates a payment method (admin-only)
  UPDATE_METHOD: (id: string) => `${API_URL}/payment-methods/${id}`,
  // Deletes a payment method (admin-only)
  DELETE_METHOD: (id: string) => `${API_URL}/payment-methods/${id}`,
};

// Review Endpoints
export const REVIEW_ENDPOINTS = {
  // Creates a user review for a service
  SERVICE_REVIEW: (id: string) => `${API_URL}/reviews/service/${id}`,
  // Creates a driver review for a user
  USER_REVIEW: (id: string) => `${API_URL}/reviews/user/${id}`,
  // Retrieves reviews for a driver
  DRIVER_REVIEWS: (id: string) => `${API_URL}/reviews/driver/${id}`,
  // Retrieves reviews for a user
  USER_REVIEWS: (id: string) => `${API_URL}/reviews/user/${id}`,
  // Retrieves all reviews with filters
  LIST: `${API_URL}/reviews`,
  // Retrieves details of a specific review
  GET_BY_ID: (id: string) => `${API_URL}/reviews/${id}`,
  // Updates a review
  UPDATE: (id: string) => `${API_URL}/reviews/${id}`,
  // Deletes a review
  DELETE: (id: string) => `${API_URL}/reviews/${id}`,
  // Retrieves all driver-to-user reviews
  DRIVER_TO_USER: `${API_URL}/driver-reviews`,
  // Retrieves a specific driver-to-user review
  DRIVER_TO_USER_BY_ID: (id: string) => `${API_URL}/driver-reviews/${id}`,
  // Updates a driver-to-user review
  UPDATE_DRIVER_REVIEW: (id: string) => `${API_URL}/driver-reviews/${id}`,
  // Deletes a driver-to-user review
  DELETE_DRIVER_REVIEW: (id: string) => `${API_URL}/driver-reviews/${id}`,
  // Retrieves review statistics
  ANALYTICS: `${API_URL}/reviews/analytics`,
};

// Report Endpoints
export const REPORT_ENDPOINTS = {
  // Creates a new user report
  CREATE: `${API_URL}/reports`,
  // Retrieves all reports
  LIST: `${API_URL}/reports`,
  // Retrieves details of a specific report
  GET_BY_ID: (id: string) => `${API_URL}/reports/${id}`,
  // Updates a report (admin-only)
  UPDATE: (id: string) => `${API_URL}/reports/${id}`,
  // Deletes a report (admin-only)
  DELETE: (id: string) => `${API_URL}/reports/${id}`,
  // Retrieves all reports (admin-only)
  ADMIN_LIST: `${API_URL}/admin/reports`,
  // Updates a report’s status (admin-only)
  ADMIN_UPDATE_STATUS: (id: string) => `${API_URL}/admin/reports/${id}/status`,
  // Sends a response to a report (admin-only)
  ADMIN_RESPONSE: (id: string) => `${API_URL}/admin/reports/${id}/response`,
  // Retrieves report statistics
  ANALYTICS: `${API_URL}/reports/analytics`,
  // Retrieves report types breakdown
  TYPES: `${API_URL}/reports/types`,
};

// Notification Endpoints
export const NOTIFICATION_ENDPOINTS = {
  // Creates a new notification (admin-only)
  CREATE: `${API_URL}/admin/notifications`,
  // Retrieves all notifications
  LIST: `${API_URL}/notifications`,
  // Retrieves a specific notification
  GET_BY_ID: (id: string) => `${API_URL}/notifications/${id}`,
  // Marks a notification as read
  MARK_READ: (id: string) => `${API_URL}/notifications/${id}/read`,
  // Marks all notifications as read
  MARK_ALL_READ: `${API_URL}/notifications/mark-all-read`,
  // Deletes a notification
  DELETE: (id: string) => `${API_URL}/notifications/${id}`,
  // Creates a broadcast notification (admin-only)
  BROADCAST: `${API_URL}/admin/notifications/broadcast`,
  // Retrieves notification statistics (admin-only)
  STATS: `${API_URL}/admin/notifications/stats`,
  // Retrieves notification preferences
  PREFERENCES: `${API_URL}/notifications/preferences`,
  // Updates notification preferences
  UPDATE_PREFERENCES: `${API_URL}/notifications/preferences`,
  // Sends a targeted notification to specific users (admin-only)
  TARGETED: `${API_URL}/admin/notifications/targeted`,
};

// Vehicle Endpoints
export const VEHICLE_ENDPOINTS = {
  // Creates a new vehicle
  CREATE: `${API_URL}/vehicles`,
  // Retrieves all vehicles
  LIST: `${API_URL}/vehicles`,
  // Retrieves details of a specific vehicle
  GET_BY_ID: (id: string) => `${API_URL}/vehicles/${id}`,
  // Updates a vehicle’s details
  UPDATE: (id: string) => `${API_URL}/vehicles/${id}`,
  // Deletes a vehicle
  DELETE: (id: string) => `${API_URL}/vehicles/${id}`,
  // Creates a new vehicle type (admin-only)
  CREATE_TYPE: `${API_URL}/vehicle-types`,
  // Retrieves all vehicle types
  LIST_TYPES: `${API_URL}/vehicle-types`,
  // Retrieves details of a specific vehicle type
  GET_TYPE: (id: string) => `${API_URL}/vehicle-types/${id}`,
  // Updates a vehicle type (admin-only)
  UPDATE_TYPE: (id: string) => `${API_URL}/vehicle-types/${id}`,
  // Deletes a vehicle type (admin-only)
  DELETE_TYPE: (id: string) => `${API_URL}/vehicle-types/${id}`,
  // Uploads documents for a vehicle
  UPLOAD_DOCUMENTS: (id: string) => `${API_URL}/vehicles/${id}/documents`,
  // Retrieves documents for a vehicle
  GET_DOCUMENTS: (id: string) => `${API_URL}/vehicles/${id}/documents`,
  // Updates a vehicle document
  UPDATE_DOCUMENT: (id: string, docId: string) => `${API_URL}/vehicles/${id}/documents/${docId}`,
  // Deletes a vehicle document
  DELETE_DOCUMENT: (id: string, docId: string) => `${API_URL}/vehicles/${id}/documents/${docId}`,
  // Retrieves vehicles with expiring documents (insurance/inspection alerts)
  EXPIRING_DOCUMENTS: `${API_URL}/vehicles/expiring-documents`,
};

// Place Recommendation Endpoints
export const PLACE_ENDPOINTS = {
  // Creates a new place (admin-only)
  CREATE: `${API_URL}/places`,
  // Retrieves all places
  LIST: `${API_URL}/places`,
  // Retrieves details of a specific place
  GET_BY_ID: (id: string) => `${API_URL}/places/${id}`,
  // Updates a place’s details (admin-only)
  UPDATE: (id: string) => `${API_URL}/places/${id}`,
  // Deletes a place (admin-only)
  DELETE: (id: string) => `${API_URL}/places/${id}`,
  // Creates a new place category (admin-only)
  CREATE_CATEGORY: `${API_URL}/place-categories`,
  // Retrieves all place categories
  LIST_CATEGORIES: `${API_URL}/place-categories`,
  // Retrieves details of a specific place category
  GET_CATEGORY: (id: string) => `${API_URL}/place-categories/${id}`,
  // Updates a place category (admin-only)
  UPDATE_CATEGORY: (id: string) => `${API_URL}/place-categories/${id}`,
  // Deletes a place category (admin-only)
  DELETE_CATEGORY: (id: string) => `${API_URL}/place-categories/${id}`,
};

// Survey Endpoints
export const SURVEY_ENDPOINTS = {
  // Retrieves all surveys
  LIST: `${API_URL}/surveys`,
  // Retrieves details of a specific survey
  GET_BY_ID: (id: string) => `${API_URL}/surveys/${id}`,
  // Marks a survey as complete
  COMPLETE: (id: string) => `${API_URL}/surveys/${id}/complete`,
  // Deletes a survey
  DELETE: (id: string) => `${API_URL}/surveys/${id}`,
};

// Region Endpoints
export const REGION_ENDPOINTS = {
  // Creates a new region (admin-only)
  CREATE: `${API_URL}/regions`,
  // Retrieves all regions
  LIST: `${API_URL}/regions`,
  // Retrieves region hierarchy
  HIERARCHY: `${API_URL}/regions/hierarchy`,
  // Retrieves details of a specific region
  GET_BY_ID: (id: string) => `${API_URL}/regions/${id}`,
  // Updates a region (admin-only)
  UPDATE: (id: string) => `${API_URL}/regions/${id}`,
  // Deletes a region (admin-only)
  DELETE: (id: string) => `${API_URL}/regions/${id}`,
  // Creates a new district (admin-only)
  CREATE_DISTRICT: `${API_URL}/districts`,
  // Retrieves all districts
  LIST_DISTRICTS: `${API_URL}/districts`,
  // Retrieves details of a specific district
  GET_DISTRICT: (id: string) => `${API_URL}/districts/${id}`,
  // Updates a district (admin-only)
  UPDATE_DISTRICT: (id: string) => `${API_URL}/districts/${id}`,
  // Deletes a district (admin-only)
  DELETE_DISTRICT: (id: string) => `${API_URL}/districts/${id}`,
};

// Service Type Endpoints
export const SERVICE_TYPE_ENDPOINTS = {
  // Creates a new service type (admin-only)
  CREATE: `${API_URL}/service-types`,
  // Retrieves all service types
  LIST: `${API_URL}/service-types`,
  // Retrieves details of a specific service type
  GET_BY_ID: (id: string) => `${API_URL}/service-types/${id}`,
  // Updates a service type (admin-only)
  UPDATE: (id: string) => `${API_URL}/service-types/${id}`,
  // Deletes a service type (admin-only)
  DELETE: (id: string) => `${API_URL}/service-types/${id}`,
  // Assigns a driver to a service type
  ASSIGN_DRIVER: `${API_URL}/service-types/assign-driver`,
  // Removes a driver from a service type
  REMOVE_DRIVER: (serviceTypeId: string, driverProfileId: string) => `${API_URL}/service-types/${serviceTypeId}/drivers/${driverProfileId}`,
  // Retrieves drivers assigned to a service type
  GET_DRIVERS: (id: string) => `${API_URL}/service-types/${id}/drivers`,
};

// Recommendation Model Endpoints
export const RECOMMENDATION_MODEL_ENDPOINTS = {
  // Creates a new recommendation model (admin-only)
  CREATE: `${API_URL}/recommendations/models`,
  // Retrieves all recommendation models
  LIST: `${API_URL}/recommendations/models`,
  // Retrieves details of a specific recommendation model
  GET_BY_ID: (id: string) => `${API_URL}/recommendations/models/${id}`,
  // Updates a recommendation model (admin-only)
  UPDATE: (id: string) => `${API_URL}/recommendations/models/${id}`,
  // Deletes a recommendation model (admin-only)
  DELETE: (id: string) => `${API_URL}/recommendations/models/${id}`,
};

// System Configuration Endpoints
export const SYSTEM_CONFIG_ENDPOINTS = {
  // Retrieves system configuration
  GET: `${API_URL}/admin/config`,
  // Updates a specific configuration key
  UPDATE: (key: string) => `${API_URL}/admin/config/${key}`,
  // Adds a new configuration
  ADD: `${API_URL}/admin/config`,
  // Deletes a configuration key
  DELETE: (key: string) => `${API_URL}/admin/config/${key}`,
};

// System Analytics Endpoints
export const SYSTEM_ANALYTICS_ENDPOINTS = {
  // Provides system overview analytics
  OVERVIEW: `${API_URL}/admin/analytics-overview`,
  // Retrieves revenue analytics
  REVENUE: `${API_URL}/admin/analytics/revenue`,
  // Retrieves user analytics
  USERS: `${API_URL}/admin/analytics/users`,
  // Retrieves driver analytics
  DRIVERS: `${API_URL}/admin/analytics/drivers`,
  // Retrieves service analytics
  SERVICES: `${API_URL}/admin/analytics/services`,
};

// WebSocket Endpoints
export const WEBSOCKET_ENDPOINTS = {
  // Handles real-time driver updates (location, status)
  DRIVER: (driverId: string) => `/ws/driver/${driverId}`,
  // Handles real-time user updates (notifications, status)
  USER: (userId: string) => `/ws/user/${userId}`,
  // Handles real-time service tracking (location, status)
  SERVICE: (serviceId: string) => `/ws/service/${serviceId}`,
  // Handles real-time admin dashboard updates
  ADMIN: `/ws/admin`,
};

// App Constants
export const APP_CONSTANTS = {
  // Key for storing authentication token
  AUTH_TOKEN_KEY: "tripsync_auth_token",
  // Key for storing user data
  USER_KEY: "tripsync_user",
};

// Image Assets
export const IMAGES = {
  // Image for first onboarding screen
  ONBOARDING1: require("../assets/images/onboarding1.png"),
  // Image for second onboarding screen
  ONBOARDING2: require("../assets/images/onboarding2.png"),
  // Image for third onboarding screen
  ONBOARDING3: require("../assets/images/onboarding3.png"),
  // Image for signup screen
  SIGNUP_CAR: require("../assets/images/signup-car.png"),
  // Checkmark image
  CHECK: require("../assets/images/check.png"),
  // No results found image
  NO_RESULT: require("../assets/images/no-result.png"),
  // Message icon image
  MESSAGE: require("../assets/images/message.png"),
};

// Icon Assets
export const ICONS = {
  // Email icon
  EMAIL: require("../assets/icons/email.png"),
  // Lock (password) icon
  LOCK: require("../assets/icons/lock.png"),
  // Person (user) icon
  PERSON: require("../assets/icons/person.png"),
  // Google login icon
  GOOGLE: require("../assets/icons/google.png"),
  // Map icon
  MAP: require("../assets/icons/map.png"),
  // Profile icon
  PROFILE: require("../assets/icons/profile.png"),
  // Home icon
  HOME: require("../assets/icons/home.png"),
  // Search icon
  SEARCH: require("../assets/icons/search.png"),
  // Chat icon
  CHAT: require("../assets/icons/chat.png"),
};

// Onboarding Data
export const ONBOARDING_DATA = [
  {
    id: 1,
    // Title for first onboarding screen
    title: "The perfect ride is just a tap away!",
    // Description for first onboarding screen
    description: "Your journey begins with TripSync. Find your ideal ride effortlessly.",
    // Image for first onboarding screen
    image: IMAGES.ONBOARDING1,
  },
  {
    id: 2,
    // Title for second onboarding screen
    title: "Best car in your hands with TripSync",
    // Description for second onboarding screen
    description: "Discover the convenience of finding your perfect ride with TripSync",
    // Image for second onboarding screen
    image: IMAGES.ONBOARDING2,
  },
  {
    id: 3,
    // Title for third onboarding screen
    title: "Your ride, your way. Let's go!",
    // Description for third onboarding screen
    description: "Enter your destination, sit back, and let us take care of the rest.",
    // Image for third onboarding screen
    image: IMAGES.ONBOARDING3,
  },
];