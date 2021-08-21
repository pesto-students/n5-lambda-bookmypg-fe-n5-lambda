README
======

**BookMyPG Application**
========================

**Table of Contents**
---------------------

1.  [About The
    Project](#about-the-project)

2.  [Getting
    Started](#getting-started)

    1.  [Prerequisites](#Prerequisites)

    2.  [Installation](#installation)

3.  [Tech
    Stack](#tech-stack)

4.  [Tools and
    Integration](#tools)

5.  [Resources](#resources)

6.  [Developers](#developers)

7.  [Working & UI
    Screens](#working--ui-screens)

**About The Project**
---------------------

With the need of people who work away from their home and face lots of
difficulties in hunting for accommodation in a new city or location, the
goal of this system is to facilitate them with hassle-free paying guest
services with managing reminders for rent every month and auto payments.
The proposed system will also provide the PG - Owner a huge online
platform to find the Paying Guests effortlessly.

**Live Link**
-------------

BookMyPg App Link:
<http://lambda-n5-bookmypg-fe.s3-website.us-east-2.amazonaws.com/>

**Getting Started**
-------------------

To get a local copy up and running follow these simple steps.

### **Prerequisites**

This is an example of how to list things you need to use the software
and how to install them.

-   npm

> npm install npm@latest -g

### **Installation**

1.  Clone the repos backend & frontend

 >  git clone https://github.com/pesto-students/n5-lambda-bookmypg-fe-n5-lambda/tree/master

    
 >  git clone  https://github.com/pesto-students/n5-lambda-bookMyPg-backend/tree/master


2.  Install NPM packages in both

    > npm install

3.  Add the .env file in the root for backend app.

 >  PORT=4000

 >  MONGODB\_URL="mongo\_URL"

 >  JWT\_SECRET\_KEY="jwt\_secret\_key"

 >  ADMIN\_EMAIL="admin\_email"

 >  ADMIN\_PASSWORD="admin\_password"

 >  SENDER\_EMAIL="sender\_email"

 > \#ADMIN\_EMAIL="admin\_email"

 > \#ADMIN\_PAS123"SWORD="password

 > \#JWT\_SECRET="jwt\_secret"

 > TEST\_CASE\_EMAIL = 'testemail'

 > S3\_DEPLOYMENT\_LINK\_DEV =
    "http://bookmypg-lambda-frontend.s3-website.us-east-2.amazonaws.com"

 > S3\_PUBLIC\_IMAGES\_LINK =
 > "https://bookmypg-public.s3.us-east-2.amazonaws.com/images"

4.  Run the backend server

 > npm run dev

5.  Run the frontend app

 > npm run start

### **Tech Stack**

-   [React.js](https://reactjs.org/)

-   [Redux](https://redux.js.org/)

-   [Node.js](https://nodejs.org/en/)

-   [MongoDB](https://www.mongodb.com/)

### **3rd Party Integration**

-   [Stripe](https://stripe.com/en-in)

-   [AWS S3](https://aws.amazon.com/)

### **Tools**

-   [AWS](https://aws.amazon.com/)

-   [Draw.io](https://app.diagrams.net/)

-   [Github](https://github.com/)

### **Source Code Repo**

-   Front End Source Repo -
    <https://github.com/pesto-students/n5-lambda-bookmypg-fe-n5-lambda/tree/master>

-   Back End Source Repo -
    <https://github.com/pesto-students/n5-lambda-bookMyPg-backend/tree/master>

**Resources**
-------------

-   [User
    Flow](https://bookmypg.atlassian.net/wiki/spaces/BOOKMYPG/pages/327681/BookMyPG+-+Product+Requirement+Document#User-Flows)

-   [PRD](https://bookmypg.atlassian.net/wiki/spaces/BOOKMYPG/pages/327681/BookMyPG+-+Product+Requirement+Document)

-   [High Level
    Design](https://drive.google.com/file/d/1VF9GqN0jKFuclq5QZTl3fMsL_w0-qoBo/view?usp=sharing)

-   [Wireframes](https://balsamiq.cloud/seg1rg9/pgbqrby/r890A)

**Developers**
--------------

-   Monali Doshi

-   Hari Dhole

-   Vignesh Shenoy

**Out of Scope**
----------------

1.  Custom amenity request by owner.

2.  User wallet

3.  Dynamic dashboard with real time analytics.

**Working & UI Screens**
------------------------

Working of the Application:

<https://www.loom.com/share/61c5fa87ef8745b49be755ccbeb99038>

**User Screens**
----------------

### Landing Page

![alt text](blob:https://bookmypg.atlassian.net/5525d6b9-b478-4107-9821-715ac2f2c71c#media-blob-url=true&id=b316d538-a519-424f-885c-229c24703dab&collection=contentId-12615699&contextId=12615699&mimeType=image%2Fpng&name=Homepage1.PNG&size=1039449&width=1151&height=508)

This is the Landing page of our application. You can navigate to the
below mentioned links from the homepage.

1.  Home ( Landing page)

2.  About us

3.  Login

![](https://drive.google.com/file/d/1RQW7pp1EBtVgTVPrWGlVmf9SFAezjol0/view?usp=sharing"}

We have also implemented a dynamic slider to showcase the recently added
properties. This gets update after new properties are added by the owner
via the application.

We have configured role based authentication using firebase and
implemented google sign in.

Anyone who logs in to the application is considered to be an end user.
Owners are added by the administrator manually.

### About us Page

This page lets users know more about our application.

![image](https://drive.google.com/uc?export=view&id=pp1EBtVgTVPrWGlVmf9SFAezjol0

### Login

Google Login pops up when you click on login.

![](media/image5.png){width="4.875in" height="2.283333333333333in"}

### Search by Location 

End users can search for properties without having to login to the
application. This simple Location dropdown lets him/her do so.

We have currently added seven major locations. They are

1.  Mumbai

2.  Bengaluru

3.  Ahmedabad

4.  Aurangabad

5.  Chennai

6.  Delhi

7.  Kolkata

![](media/image6.png){width="4.875in" height="2.283333333333333in"}

### Location wise property list

Location wise property list is fetched on selecting any of the
locations.

![](media/image7.png){width="4.875in" height="2.4583333333333335in"}

The user can directly schedule visit from here or he/she can view more
details about the Property. The details are as follows:

1.  Name of the property.

2.  Address of the property.

3.  Rent of the property.

4.  Amenities provided

5.  Reviews of the property (If any)

More details about the property can be found on clicking ‘**More
details’** button.

![](media/image8.png){width="4.875in" height="2.441666666666667in"}

### Schedule visit

Users can schedule visit to the properties if he/she would like to check
out the property before moving in. They can do so on clicking
“**Schedule visit**” button.

![](media/image9.png){width="4.875in" height="2.45in"}

Basic details are required to schedule a visit. The user may select date
within a Seven day (One week) range.

![](media/image10.png){width="4.875in" height="2.4583333333333335in"}

### Book property

Users can book property on clicking the “**Book Property**” button.

![](media/image11.png){width="4.875in" height="2.441666666666667in"}

Users may select the preferred date to move in and complete the payment
via stripe payment gateway. This online transaction is completely
trusted and secure.

![](media/image12.png){width="4.875in" height="2.441666666666667in"}

**Admin Screens**
-----------------

Admin logs in using his/her Gmail account.

Admin is able to Add/Enable/Disable owners from the owners list.

![](media/image13.png){width="4.875in" height="2.0833333333333335in"}

Admin can also search for owner. This search can be further simplified
through the registration date.

![](media/image14.png){width="4.875in"
height="1.9583333333333333in"}![](media/image15.tmp){width="4.875in"
height="2.45in"}

Enable/Disable owner.

![](media/image16.png){width="4.875in" height="2.1in"}

The admin also has access to the Amenity list. He/she can
add/enable/disable amenities.

![](media/image17.png){width="4.875in"
height="2.4166666666666665in"}![](media/image18.png){width="4.875in"
height="2.408333333333333in"}

**Owner Screens**
-----------------

### Property list

Owners are added by admin manually.

Owners have access to the property list. He/she can add/enable/disable a
property. An owner can own more than one property. He/she may list their
properties.

![](media/image19.tmp){width="4.875in"
height="2.3833333333333333in"}![](media/image20.png){width="4.875in"
height="2.45in"}

The owner has to fill in the required form in order to be able to add
the property he/she wishes to list.

Fields to be filled

1.  Name of the property

2.  Address of the property

3.  Beds availability

4.  Description about the property

5.  Location of the property

6.  Amenities from the amenities dropdown that his/her property can
    afford or which are present already.

7.  Gender ( Male/Female/other)

8.  Rent of the property.

9.  Image/Images of the property

Owner may enable or disable the property based on the availability of
the beds.

### Tenants list

The owner has access to the list of tenants. He/she may enable/disable
the tenant.

![](media/image21.png){width="4.875in" height="2.2916666666666665in"}

### Complaints list

Owners have access to the complaints list. He/she can click on the
active status of the Complaint to get more details about the complaint.

![](media/image22.png){width="4.875in" height="2.2916666666666665in"}

![](media/image23.png){width="4.875in" height="2.3666666666666667in"}
