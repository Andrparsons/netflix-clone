import React, { useState, useContext } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState("shows");
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: "Test Name",
    photoURL: "1",
  };

  return profile.displayName ? (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/misc/logo.svg"
              alt="Netflix"
            />
            <Header.Link
              active={category === "shows" ? "true" : "false"}
              onClick={() => setCategory("shows")}
            >
              TV Shows
            </Header.Link>
            <Header.Link
              active={category === "movies" ? "true" : "false"}
              onClick={() => setCategory("movies")}
            >
              Movies
            </Header.Link>
          </Header.Group>
        </Header.Frame>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
