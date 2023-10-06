import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  // useRef for reading value
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value; // just reading value
    const imageTitle = imageInputRef.current.value; // just reading value
    const addressTitle = addressInputRef.current.value;
    const descriptionTitle = descriptionInputRef.current.value;

    const meetupData = {
      // >> sending data to line 28 forwarding to anothor one
      title: enteredTitle,
      image: imageTitle,
      address: addressTitle,
      description: descriptionTitle,
    };

    props.onAddMeetup(meetupData); //onAddMeetup can use any name thay up to you
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Travel Place</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Travel Image</label>
          <input type="text" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Where</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            row="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Your Blogs</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
