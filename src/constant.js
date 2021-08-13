export const LOCAL_STORAGE_X_AUTH_KEY = "X-auth";
export const GET_AUTH_TOKEN = "GET_AUTH_TOKEN";
export const SIGN_OUT = "SIGN_OUT";
export const RECEIVED_AUTH_TOKEN = "RECIEVED_AUTH_TOKEN";

export const GET_USER_REQUEST_MADE = "GET_USER_REQUEST_MADE";
export const GET_USER_REQUEST_RESOLVED = "SUBMIT_USER_REQUEST_RESOLVED";
export const GET_USER_REQUEST_FAILED = "GET_USER_REQUEST_FAILED";
export const RESET_USER_STATE = "RESET_USER_STATE";

export const GET_PROPERTIES_REQUEST_MADE = "GET_PROPERTIES_REQUEST_MADE";
export const GET_PROPERTIES_REQUEST_RESOLVED =
  "GET_PROPERTIES_REQUEST_RESOLVED";
export const GET_PROPERTIES_REQUEST_FAILED = "GET_PROPERTIES_REQUEST_FAILED";
export const RESET_PROPERTIES_STATE = "RESET_PROPERTIES_STATE";

export const GET_TENANTS_REQUEST_MADE = "GET_TENANTS_REQUEST_MADE";
export const GET_TENANTS_REQUEST_RESOLVED = "GET_TENANTS_REQUEST_RESOLVED";
export const GET_TENANTS_REQUEST_FAILED = "GET_TENANTS_REQUEST_FAILED";
export const RESET_TENANTS_STATE = "RESET_TENANTS_STATE";

export const UPDATE_TENANT_REQUEST_MADE = "UPDATE_TENANT_REQUEST_MADE";
export const UPDATE_TENANT_REQUEST_RESOLVED = "UPDATE_TENANT_REQUEST_RESOLVED";
export const UPDATE_TENANT_REQUEST_FAILED = "UPDATE_TENANT_REQUEST_FAILED";

export const GET_COMPLAINTS_REQUEST_MADE = "GET_COMPLAINTS_REQUEST_MADE";
export const GET_COMPLAINTS_REQUEST_RESOLVED =
  "GET_COMPLAINTS_REQUEST_RESOLVED";
export const GET_COMPLAINTS_REQUEST_FAILED = "GET_COMPLAINTS_REQUEST_FAILED";
export const RESET_COMPLAINTS_STATE = "RESET_COMPLAINTS_STATE";

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
  name: "Tanant name",
  email: "Email",
  phone: "Contact no",
  property: "Property Name",
  createdAt: "Complaint Date",
  status: "Status",
};

export const PROPERTY_LIST_HEADERS = {
  name: "Property name",
  location: "Location",
  address: "Address",
  freebeds: "Free Beds",
  createdAt: "Registered Date",
};

export const OWNER_LIST_HEADERS = {
  name: "Owner name",
  email: "Email",
  phone: "Contact no",
  property: "Property Names",
  createdAt: "Registered Date",
};

export const AMENITY_LIST_HEADERS = {
  name: "Amenity name",
  logo: "Logo",
  createdAt: "Registered Date",
};

export const TENANT_LIST_HEADERS = {
  name: "Tanant name",
  email: "Email",
  phone: "Contact no",
  property: "Property Name",
  createdAt: "Onboarding Date",
};

export const PAYMENT_LIST_HEADERS = {
  property: "Property name",
  owner: "Email",
  amount: "Amount",
  chargeid: "Charge ID",
  createdAt: "Payment Date",
};
