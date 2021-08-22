export const LOCAL_STORAGE_X_AUTH_KEY = "X-auth";
export const GET_AUTH_TOKEN = "GET_AUTH_TOKEN";
export const SIGN_OUT = "SIGN_OUT";
export const RECEIVED_AUTH_TOKEN = "RECIEVED_AUTH_TOKEN";

export const GET_USER_REQUEST_MADE = "GET_USER_REQUEST_MADE";
export const GET_USER_REQUEST_RESOLVED = "GET_USER_REQUEST_RESOLVED";
export const GET_USER_REQUEST_FAILED = "GET_USER_REQUEST_FAILED";
export const RESET_USER_STATE = "RESET_USER_STATE";

export const UPDATE_USER_REQUEST_MADE = "UPDATE_USER_REQUEST_MADE";
export const UPDATE_USER_REQUEST_RESOLVED = "UPDATE_USER_REQUEST_RESOLVED";
export const UPDATE_USER_REQUEST_FAILED = "UPDATE_USER_REQUEST_FAILED";

export const GET_PROPERTIES_REQUEST_MADE = "GET_PROPERTIES_REQUEST_MADE";
export const GET_PROPERTIES_REQUEST_RESOLVED =
  "GET_PROPERTIES_REQUEST_RESOLVED";
export const GET_PROPERTIES_REQUEST_FAILED = "GET_PROPERTIES_REQUEST_FAILED";
export const RESET_PROPERTIES_STATE = "RESET_PROPERTIES_STATE";

export const GET_PROPERTIES_BY_OWNER_REQUEST_MADE =
  "GET_PROPERTIES_BY_OWNER_REQUEST_MADE";
export const GET_PROPERTIES_BY_OWNER_REQUEST_RESOLVED =
  "GET_PROPERTIES_BY_OWNER_REQUEST_RESOLVED";
export const GET_PROPERTIES_BY_OWNER_REQUEST_FAILED =
  "GET_PROPERTIES_BY_OWNER_REQUEST_FAILED";

export const ADD_PROPERTY_REQUEST_MADE = "ADD_PROPERTY_REQUEST_MADE";
export const ADD_PROPERTY_REQUEST_RESOLVED = "ADD_PROPERTY_REQUEST_RESOLVED";
export const ADD_PROPERTY_REQUEST_FAILED = "ADD_PROPERTY_REQUEST_FAILED";

export const UPDATE_PROPERTY_REQUEST_MADE = "UPDATE_PROPERTY_REQUEST_MADE";
export const UPDATE_PROPERTY_REQUEST_RESOLVED =
  "UPDATE_PROPERTY_REQUEST_RESOLVED";
export const UPDATE_PROPERTY_REQUEST_FAILED = "UPDATE_PROPERTY_REQUEST_FAILED";

export const GET_LATEST_PROPERTIES_REQUEST_MADE =
  "GET_LATEST_PROPERTIES_REQUEST_MADE";
export const GET_LATEST_PROPERTIES_REQUEST_RESOLVED =
  "GET_LATEST_PROPERTIES_REQUEST_RESOLVED";
export const GET_LATEST_PROPERTIES_REQUEST_FAILED =
  "GET_LATEST_PROPERTIES_REQUEST_FAILED";
export const RESET_LATEST_PROPERTIES_STATE = "RESET_LATEST_PROPERTIES_STATE";

export const GET_TENANTS_REQUEST_MADE = "GET_TENANTS_REQUEST_MADE";
export const GET_TENANTS_REQUEST_RESOLVED = "GET_TENANTS_REQUEST_RESOLVED";
export const GET_TENANTS_REQUEST_FAILED = "GET_TENANTS_REQUEST_FAILED";
export const RESET_TENANTS_STATE = "RESET_TENANTS_STATE";

export const GET_TENANTS_BY_OWNER_REQUEST_MADE =
  "GET_TENANTS_BY_OWNER_REQUEST_MADE";
export const GET_TENANTS_BY_OWNER_REQUEST_RESOLVED =
  "GET_TENANTS_BY_OWNER_REQUEST_RESOLVED";
export const GET_TENANTS_BY_OWNER_REQUEST_FAILED =
  "GET_TENANTS_BY_OWNER_REQUEST_FAILED";

export const UPDATE_TENANT_REQUEST_MADE = "UPDATE_TENANT_REQUEST_MADE";
export const UPDATE_TENANT_REQUEST_RESOLVED = "UPDATE_TENANT_REQUEST_RESOLVED";
export const UPDATE_TENANT_REQUEST_FAILED = "UPDATE_TENANT_REQUEST_FAILED";

export const ADD_TENANT_REQUEST_MADE = "ADD_TENANT_REQUEST_MADE";
export const ADD_TENANT_REQUEST_RESOLVED = "ADD_TENANT_REQUEST_RESOLVED";
export const ADD_TENANT_REQUEST_FAILED = "ADD_TENANT_REQUEST_FAILED";

export const GET_AMENITIES_REQUEST_MADE = "GET_AMENITIES_REQUEST_MADE";
export const GET_AMENITIES_REQUEST_RESOLVED = "GET_AMENITIES_REQUEST_RESOLVED";
export const GET_AMENITIES_REQUEST_FAILED = "GET_AMENITIES_REQUEST_FAILED";
export const RESET_AMENITIES_STATE = "RESET_AMENITIES_STATE";

export const UPDATE_AMENITY_REQUEST_MADE = "UPDATE_AMENITY_REQUEST_MADE";
export const UPDATE_AMENITY_REQUEST_RESOLVED =
  "UPDATE_AMENITY_REQUEST_RESOLVED";
export const UPDATE_AMENITY_REQUEST_FAILED = "UPDATE_AMENITY_REQUEST_FAILED";

export const ADD_AMENITY_REQUEST_MADE = "ADD_AMENITY_REQUEST_MADE";
export const ADD_AMENITY_REQUEST_RESOLVED = "ADD_AMENITY_REQUEST_RESOLVED";
export const ADD_AMENITY_REQUEST_FAILED = "ADD_AMENITY_REQUEST_FAILED";

export const GET_COMPLAINTS_REQUEST_MADE = "GET_COMPLAINTS_REQUEST_MADE";
export const GET_COMPLAINTS_REQUEST_RESOLVED =
  "GET_COMPLAINTS_REQUEST_RESOLVED";
export const GET_COMPLAINTS_REQUEST_FAILED = "GET_COMPLAINTS_REQUEST_FAILED";
export const RESET_COMPLAINTS_STATE = "RESET_COMPLAINTS_STATE";

export const GET_PAYMENTS_REQUEST_MADE = "GET_PAYMENTS_REQUEST_MADE";
export const GET_PAYMENTS_REQUEST_RESOLVED = "GET_PAYMENTS_REQUEST_RESOLVED";
export const GET_PAYMENTS_REQUEST_FAILED = "GET_PAYMENTS_REQUEST_FAILED";
export const RESET_PAYMENTS_STATE = "RESET_PAYMENTS_STATE";

export const RAISE_COMPLAINT_REQUEST_MADE = "RAISE_COMPLAINT_REQUEST_MADE";
export const RAISE_COMPLAINT_REQUEST_RESOLVED =
  "RAISE_COMPLAINT_REQUEST_RESOLVED";
export const RAISE_COMPLAINT_REQUEST_FAILED = "RAISE_COMPLAINT_REQUEST_FAILED";

export const UPDATE_COMPLAINT_REQUEST_MADE = "UPDATE_COMPLAINT_REQUEST_MADE";
export const UPDATE_COMPLAINT_REQUEST_RESOLVED =
  "UPDATE_COMPLAINT_REQUEST_RESOLVED";
export const UPDATE_COMPLAINT_REQUEST_FAILED =
  "UPDATE_COMPLAINT_REQUEST_FAILED";

export const GET_LOCATIONS_REQUEST_MADE = "GET_LOCATIONS_REQUEST_MADE";
export const GET_LOCATIONS_REQUEST_RESOLVED = "GET_LOCATIONS_REQUEST_RESOLVED";
export const GET_LOCATIONS_REQUEST_FAILED = "GET_LOCATIONS_REQUEST_FAILED";
export const RESET_LOCATIONS_STATE = "RESET_LOCATIONS_STATE";

export const SET_SELECTED_LOCATION_REQUEST_MADE =
  "SET_SELECTED_LOCATION_REQUEST_MADE";

export const GET_SELECTED_LOCATION_REQUEST_MADE =
  "GET_SELECTED_LOCATION_REQUEST_MADE";

export const S3_BUCKET_URL =
  "https://bookmypg-photos.s3.us-east-2.amazonaws.com";

export const S3_BUCKET_IMAGES_BASEURL =
  "https://bookmypg-public.s3.us-east-2.amazonaws.com/images";

export const COMPLAINT_LIST_HEADERS = {
  name: "Tanant Name",
  email: "Email",
  phone: "Contact No",
  property: "Property Name",
  createdAt: "Complaint Date",
  status: "Status",
};

export const PAYMENT_LIST_HEADERS = {
  name: "Tanant Name",
  property: "Property Name",
  amount: "Amount",
  charge_id: "Charge ID",
  createdAt: "Paid On",
};

export const PROPERTY_LIST_HEADERS = {
  name: "Property Name",
  isactive: "Status",
  location: "Location",
  address: "Address",
  freebeds: "Total Beds",
  createdAt: "Registered On",
};

export const OWNER_LIST_HEADERS = {
  name: "Owner Name",
  isactive: "Status",
  email: "Email",
  phone: "Contact No",
  property: "Property Names",
  createdAt: "Registered On",
};

export const AMENITY_LIST_HEADERS = {
  name: "Amenity Name",
  isactive: "Status",
  logo: "Logo",
  createdAt: "Registered On",
};

export const TENANT_LIST_HEADERS = {
  name: "Tenant Name",
  isactive: "Status",
  email: "Email",
  phone: "Contact No",
  property: "Property Name",
  onboardedAt: "Onboarding Date",
};

export const EMAIL_TYPE = {
  VISIT: "Visit",
  USER_RATING: "Userrating",
  PROPERTY_RATING: "Propertyrating",
  QUERY: "Query",
};

export const DATE = {
  FROM_DATE: "2021-06-25T16:00:00.000Z",
  TO_DATE: "2021-12-31T16:00:00.000Z",
};

export const ORDER_BY = {
  DSC: "dsc",
  ASC: "asc",
};

export const LOCALE = "en-IN";
export const TIMEZONE = { timeZone: "Asia/Kolkata" };

export const SERVER_URL = "http://localhost:4000";
