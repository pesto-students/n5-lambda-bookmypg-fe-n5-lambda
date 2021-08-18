import React from "react";
import {
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles/OwnerPropertyList.styles";
import Button from "components/button/Button";
import Link from "components/link/Link";
import CloseButton from "components/closebutton/CloseButton";
import Typography from "components/typography/Typography";
import TextField from "components/textfield/Textfield";
import FormImage from "components/formimage/FormImage";
import PropertyCard from "components/card/Card";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { S3_BUCKET_URL } from "constant";
import Rating from "user/components/rating/cardratings";

const properties = [
  {
    propertydata: {
      photos: ["property-photos/610524e745e8de3ac8d1aa5b/House-pic3.jpg"],
      amenities: [
        {
          _id: "61165f65dbd711146c3d34f2",
          name: "Washing Machine",
          logo: "amenity-logos/61165f65dbd711146c3d34f2/washing-machine.png",
        },
        {
          _id: "61174f1d2beeb83e6819a626",
          name: "Air Conditioner",
          logo: "amenity-logos/61174f1d2beeb83e6819a626/air-conditioner.png",
        },
      ],
      isactive: true,
      _id: "6108147a81c01806681db1a7",
      name: "Zolo House 2",
      location: {
        _id: "610541037eefd34258a430d4",
        name: "Mumbai",
      },
      address: "Navi Mumbai",
      description: "3bhk luxurious",
      rent: 14000,
      totalbeds: 10,
      owner: {
        _id: "6117800c7c7da477742b8a6a",
        firstName: "Hari",
        lastName: "Dhole",
        email: "haridhole15@gmail.com",
        phone: 9822865328,
      },
      createdAt: "2021-08-02T15:51:22.157Z",
      updatedAt: "2021-08-02T15:51:22.157Z",
      __v: 0,
      gender: "female",
    },
    reviewdata: {
      reviews: [],
      reviewanalysis: [],
    },
  },
  {
    propertydata: {
      photos: [
        "property-photos/610524e745e8de3ac8d1aa5b/House-pic3.jpg",
        "property-photos/610524e745e8de3ac8d1aa5b/House-pic2.jpg",
      ],
      amenities: [
        {
          _id: "61174f1d2beeb83e6819a626",
          name: "Air Conditioner",
          logo: "amenity-logos/61174f1d2beeb83e6819a626/air-conditioner.png",
        },
        {
          _id: "61174f1d2beeb83e6819a626",
          name: "Air Conditioner",
          logo: "amenity-logos/61174f1d2beeb83e6819a626/air-conditioner.png",
        },
        {
          _id: "61174f272beeb83e6819a629",
          name: "Refrigerator",
          logo: "amenity-logos/61174f272beeb83e6819a629/refrigerator-5.png",
        },
      ],
      isactive: true,
      _id: "610995377c1e9b074486e06b",
      name: "Zolo House 3",
      location: {
        _id: "610541037eefd34258a430d4",
        name: "Mumbai",
      },
      address: "Navi Mumbai",
      description: "3bhk luxurious",
      rent: 14000,
      totalbeds: 10,
      owner: {
        _id: "6117800c7c7da477742b8a6a",
        firstName: "Hari",
        lastName: "Dhole",
        email: "haridhole15@gmail.com",
        phone: 9822865328,
      },
      createdAt: "2021-08-02T13:45:53.602Z",
      __v: 0,
      gender: "other",
    },
    reviewdata: {
      reviews: [],
      reviewanalysis: [],
    },
  },
  {
    propertydata: {
      photos: [
        "property-photos/611751c1d2e2d210f8cccdcd/test2.jpg",
        "property-photos/611751c1d2e2d210f8cccdcd/test3.jpg",
        "property-photos/611751c1d2e2d210f8cccdcd/test4.jpg",
        "property-photos/611751c1d2e2d210f8cccdcd/test5.jpg",
      ],
      amenities: [
        {
          _id: "61174f1d2beeb83e6819a626",
          name: "Air Conditioner",
          logo: "amenity-logos/61174f1d2beeb83e6819a626/air-conditioner.png",
        },
        {
          _id: "61165f65dbd711146c3d34f2",
          name: "Washing Machine",
          logo: "amenity-logos/61165f65dbd711146c3d34f2/washing-machine.png",
        },
        {
          _id: "61174f272beeb83e6819a629",
          name: "Refrigerator",
          logo: "amenity-logos/61174f272beeb83e6819a629/refrigerator-5.png",
        },
      ],
      isactive: true,
      _id: "611751c1d2e2d210f8cccdcd",
      name: "Zolo House 10",
      location: {
        _id: "610541037eefd34258a430d4",
        name: "Mumbai",
      },
      address: "Navi Mumbai",
      description: "3bhk luxurious",
      rent: 24000,
      totalbeds: 10,
      owner: {
        _id: "6117800c7c7da477742b8a6a",
        firstName: "Hari",
        lastName: "Dhole",
        email: "haridhole15@gmail.com",
        phone: 9822865328,
      },
      gender: "male",
      createdAt: "2021-08-14T05:16:49.124Z",
      updatedAt: "2021-08-14T05:16:49.124Z",
      __v: 0,
    },
    reviewdata: {
      reviews: [],
      reviewanalysis: [],
    },
  },
  {
    propertydata: {
      photos: [
        "property-photos/611751f8d2e2d210f8cccde0/test4.jpg",
        "property-photos/611751f8d2e2d210f8cccde0/test5.jpg",
        "property-photos/611751f8d2e2d210f8cccde0/test6.jpg",
      ],
      amenities: [
        {
          _id: "61174f1d2beeb83e6819a626",
          name: "Air Conditioner",
          logo: "amenity-logos/61174f1d2beeb83e6819a626/air-conditioner.png",
        },
        {
          _id: "61165f65dbd711146c3d34f2",
          name: "Washing Machine",
          logo: "amenity-logos/61165f65dbd711146c3d34f2/washing-machine.png",
        },
        {
          _id: "61174f272beeb83e6819a629",
          name: "Refrigerator",
          logo: "amenity-logos/61174f272beeb83e6819a629/refrigerator-5.png",
        },
        {
          _id: "61174f272beeb83e6819a629",
          name: "Refrigerator",
          logo: "amenity-logos/61174f272beeb83e6819a629/refrigerator-5.png",
        },
        {
          _id: "61174f272beeb83e6819a629",
          name: "Refrigerator",
          logo: "amenity-logos/61174f272beeb83e6819a629/refrigerator-5.png",
        },
        {
          _id: "61174f272beeb83e6819a629",
          name: "Refrigerator",
          logo: "amenity-logos/61174f272beeb83e6819a629/refrigerator-5.png",
        },
      ],
      isactive: true,
      _id: "611751f8d2e2d210f8cccde0",
      name: "Zolo House 7",
      location: {
        _id: "610541037eefd34258a430d4",
        name: "Mumbai",
      },
      address: "Navi Mumbai",
      description: "3bhk luxurious",
      rent: 24000,
      totalbeds: 10,
      owner: {
        _id: "6117800c7c7da477742b8a6a",
        firstName: "Hari",
        lastName: "Dhole",
        email: "haridhole15@gmail.com",
        phone: 9822865328,
      },
      gender: "male",
      createdAt: "2021-08-14T05:17:44.257Z",
      updatedAt: "2021-08-14T05:17:44.257Z",
      __v: 0,
    },
    reviewdata: {
      reviews: [],
      reviewanalysis: [],
    },
  },
];

export default function AddOwner(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.buttonStyle}>
      <Link text="View" handelClick={handleClickOpen} href="#" />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            width: "calc(578px + 0.5vw)",
          },
        }}
      >
        <DialogContent>
          <Grid container spacing={2}>
            {properties.map((property) => (
              <Grid item key={property.propertydata._id} xs={12} sm={6} md={6}>
                <PropertyCard type="OwnerProperty" property={property} />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button text="Cancel" handleClick={handleClose} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
