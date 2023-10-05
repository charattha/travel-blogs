import { MongoClient } from "mongodb";
import Head from "next/head";

import MeetupList from "@/components/meetups/MeetupList";
import { Fragment } from "react";
// import { useEffect, useState } from "react";

function HomePage(props) {
  // How to pre-rendering
  // const [loadedMeetups, setLoadMeetups] = useState([]);

  // useEffect(() => {
  //   //send a http request and fetch data
  //   setLoadMeetups(DUMMY_DATA);
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>Travel Blogs develop by NextJs</title>
        <meta
          name="description"
          content='"intitle:solo travel blog" - Discover travel blogs focused on solo female travelers'
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

//for server side rendering will generate every incoming request good for shoping web
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//     // no need revalidate
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sharattha:m0g8E0IgynhZvAZx@cluster0.w61zdlj.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // find mean finding data from mongoDB and get document as array
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    // to update data from sever 1 = 1 sec
    revalidate: 1,
  };
}

export default HomePage;
