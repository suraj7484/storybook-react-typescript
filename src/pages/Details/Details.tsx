import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { fetch_data } from "../../redux/actions/action";
import { Avatar, SkHeading, SkPara, Button } from "../../components";
import "./Details.css";
import {useNavigate} from "react-router-dom"

type rowDataProps = {
  id: string;
  imageUrl: string;
  name: string;
  view_hours: string;
  hours_streamed: string;
  acv: string;
  creators: string;
  streams: string;
};

type DATATYPES = {
  data?: [rowDataProps];
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "96.7vw",
  height: "84vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Details = (props: any) => {
  const { id } = useParams();
  const navigate = useNavigate()
  const rankData: DATATYPES = useSelector((state) => state);
  console.log(rankData);

  useEffect(() => {
    if (!rankData) {
      store.dispatch(fetch_data());
    }
  }, [rankData]);

  const filteredData = rankData?.data?.filter((data) => data.id === id);

  return (
    <>
      {filteredData ? (
        <StyledPaper>
          <div className="image-container">
            <Avatar
              imgSrc={filteredData[0].imageUrl}
              size="xl"
              round={5}
              label={filteredData[0].name}
            />
          </div>
          <div className="content-container">
            <div className="content-row">
                <SkHeading size="md" element="h5" label="GAME:" />{" "}
              : <SkPara size="sm" label={filteredData[0].name} />
            </div>
            <div className="content-row">
                <SkHeading size="md" element="h5" label="VIEWER HOURS:" />{" "}
              <SkPara size="sm" label={filteredData[0].view_hours} />
            </div>
            <div className="content-row">
                <SkHeading size="md" element="h5" label="HOURS STREAMED:" />{" "}
              <SkPara size="sm" label={filteredData[0].hours_streamed} />
            </div>
            <div className="content-row">
                <SkHeading size="md" element="h5" label="ACV:" />{" "}
              <SkPara size="sm" label={filteredData[0].acv} />
            </div>
            <div className="content-row">
                <SkHeading size="md" element="h5" label="CREATOR:" />{" "}
              <SkPara size="sm" label={filteredData[0].creators} />
            </div>
            <div className="content-row">
                <SkHeading size="md" element="h5" label="STREAMS:" />{" "}
              <SkPara size="sm" label={filteredData[0].streams} />
            </div>
            <div className="content-row">
                <Button primary label="Go Back" size="large" onClick={() => navigate("/")}/>
            </div>
          </div>
        </StyledPaper>
      ) : (
        ""
      )}
    </>
  );
};

export default Details;
