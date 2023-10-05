import MeetupDetail from "@/components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

function MeetUpDetailPage(props) {
  return (
    // fetching data from details btn as static
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

//fallback path
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://sharattha:m0g8E0IgynhZvAZx@cluster0.w61zdlj.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    // 1.put path
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  //fetch data for a single meetup
  const client = await MongoClient.connect(
    "mongodb+srv://sharattha:m0g8E0IgynhZvAZx@cluster0.w61zdlj.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetUpDetailPage;
