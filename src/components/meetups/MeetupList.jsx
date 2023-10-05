import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(
        (
          meetup // props รับค่าจาก Para meetups ตั้งชื่อแล้วแต่ map เป็นการเอาข้อมูลใส่ในรูป array
        ) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
            desciption={meetup.desciption}
          /> //ใส่ param และค่าที่ต้องการดึงออกมาใช้จาก object
        )
      )}
    </ul>
  );
}

export default MeetupList;
