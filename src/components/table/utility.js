import {
  COMPLAINT_LIST_HEADERS,
  AMENITY_LIST_HEADERS,
  PROPERTY_LIST_HEADERS,
  OWNER_LIST_HEADERS,
  TENANT_LIST_HEADERS,
  PAYMENT_LIST_HEADERS,
} from "constant";
import { TableCell } from "@material-ui/core";
import Viewcomplaint from "owner/components/complaint/ViewComplaint";
import AddProperty from "owner/components/property/AddProperty";
import AddAmenity from "admin/components/amenity/AddAmenity";
import AddOwner from "admin/components/owner/AddOwner";
import SwitchComponent from "components/switch/Switch";
import FormImage from "components/formimage/FormImage";
import OwnerPropertyList from "admin/components/owner/OwnerPropertyList";
import { S3_BUCKET_URL, LOCALE, TIMEZONE } from "constant";

export const getHeadersData = (list_type) => {
  switch (list_type) {
    case "Complaints":
      return COMPLAINT_LIST_HEADERS;
    case "Amenities":
      return AMENITY_LIST_HEADERS;
    case "Properties":
      return PROPERTY_LIST_HEADERS;
    case "Owners":
      return OWNER_LIST_HEADERS;
    case "Payments":
      return PAYMENT_LIST_HEADERS;
    default:
      return TENANT_LIST_HEADERS;
  }
};

export const getComponent = (emp, header, list_type, refresh, setRefresh, updateDocument, user) => {
  const complaint = {...emp};
  switch (list_type) {
    case "Complaints":
      if (header === "name") {
        return <TableCell align="center">{emp[header]}</TableCell>;
      } else if (header === "status") {
        return (
          <TableCell align="center">
            <Viewcomplaint
              complaint={complaint}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          </TableCell>
        );
      } else if (header === "createdAt") {
        return <TableCell align="center">{new Date(emp[header]).toLocaleString(LOCALE,TIMEZONE)}</TableCell>;
      } else {
        return <TableCell align="center">{emp[header]}</TableCell>;
      }
    case "Amenities":
      if (header === "name") {
        return <TableCell align="center">{emp[header]}</TableCell>;
      } else if (header === "isactive") {
        return (
          <TableCell align="center">
            <SwitchComponent
              status={emp[header]}
              refresh={refresh}
              setRefresh={setRefresh}
              updateDocument={updateDocument}
              id={emp._id}
              user={user}
            />
          </TableCell>
        );
      } else if (header === "logo") {
        return (
          <TableCell align="center">
            <FormImage
              type="logo"
              imageName={`${S3_BUCKET_URL}/${emp[header]}`}
            />
          </TableCell>
        );
      } else if (header === "createdAt") {
        return <TableCell align="center">{new Date(emp[header]).toLocaleString(LOCALE,TIMEZONE)}</TableCell>;
      } else {
        return <TableCell align="center">{emp[header]}</TableCell>;
      }
    case "Properties":
      if (header === "name") {
        return <TableCell align="center">{emp[header]}</TableCell>;
      } else if (header === "isactive") {
        return (
          <TableCell align="center">
            <SwitchComponent
              status={emp[header]}
              refresh={refresh}
              setRefresh={setRefresh}
              updateDocument={updateDocument}
              id={emp._id}
              user={user}
            />
          </TableCell>
        );
      } else if (header === "createdAt") {
        return <TableCell align="center">{new Date(emp[header]).toLocaleString(LOCALE,TIMEZONE)}</TableCell>;
      } else {
        return <TableCell align="center">{emp[header]}</TableCell>;
      }
    case "Owners":
      if (header === "name") {
        return <TableCell align="center">{emp[header]}</TableCell>;
      } else if (header === "isactive") {
        return (
          <TableCell align="center">
            <SwitchComponent
              status={emp[header]}
              refresh={refresh}
              setRefresh={setRefresh}
              updateDocument={updateDocument}
              id={emp._id}
              user={user}
            />
          </TableCell>
        );
      } else if (header === "property") {
        return (
          <TableCell align="center">
            <OwnerPropertyList owner={emp} />
          </TableCell>
        );
      } else if (header === "createdAt") {
        return <TableCell align="center">{new Date(emp[header]).toLocaleString(LOCALE,TIMEZONE)}</TableCell>;
      } else {
        return <TableCell align="center">{emp[header]}</TableCell>;
      }
    case "Tenants":
      if (header === "isactive") {
        return (
          <TableCell align="center">
            <SwitchComponent
              status={emp[header]}
              refresh={refresh}
              setRefresh={setRefresh}
              updateDocument={updateDocument}
              id={emp._id}
              user={user}
            />
          </TableCell>
        );
      } else if (header === "onboardedAt") {
        return <TableCell align="center">{new Date(emp[header]).toLocaleString(LOCALE,TIMEZONE)}</TableCell>;
      } else {
        return <TableCell align="center">{emp[header]}</TableCell>;
      }
    case "Payments":
      return <TableCell align="center">{emp[header]}</TableCell>;
    default:
      if (header === "name") {
        return (
          <TableCell align="center">
            <SwitchComponent />
          </TableCell>
        );
      } else if (header === "status") {
        return (
          <TableCell align="center">
            <Viewcomplaint test="abc" />
          </TableCell>
        );
      } else if (header === "createdAt") {
        return <TableCell align="center">{new Date(emp[header]).toLocaleString(LOCALE,TIMEZONE)}</TableCell>;
      } else {
        return <TableCell align="center">{emp[header]}</TableCell>;
      }
  }
};
