import React, { useState, useEffect, Fragment} from "react";
import { Container, Header, Icon, List } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";
import NavBar from "../../features/nav/NavBar";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((Response) => {
        //console.log(Response)
        setActivities(Response.data);
      });
  }, []); // Second paramater take care the activities request will be sent only one time, if we remove the array [] so the request will happen again and will not stop because we send the component into a loop

  return (
    <Fragment> /**Need to return only one element (Fragment), Eech element inside Fragment will be inside root element (see in Elements tab)*/
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <List>
          {activities.map((activity) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </Container>
    </Fragment>
  );
};

export default App;
