import React, { useState, useEffect } from "react";
import axios from "axios";
import { SkHeading, SkPara, Button } from "../../../components";
import RankListItem from "../RankListItem/RankListItem";
import "./RankList.css";

import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

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
  data?: [rowDataProps]
};

const RankList = () => {

  
  const DATA: DATATYPES = useSelector((state) => state);

  return (
    <>
      <Paper>
        <table className="table">
          <thead className="thead">
            <tr className="table-row table-head">
              <th className="col-1">
                <SkHeading size="xs" element="h5" color="#252e4e" label="#ID" />
              </th>
              <th className="col-2">
                <SkHeading
                  size="xs"
                  element="h5"
                  color="#252e4e"
                  label="Name"
                />
              </th>
              <th className="col-3">
                <SkHeading
                  size="xs"
                  element="h5"
                  color="#252e4e"
                  label="Viewer Hours"
                />
              </th>
              <th className="col-4">
                <SkHeading
                  size="xs"
                  element="h5"
                  color="#252e4e"
                  label="Hours Streamed"
                />
              </th>
              <th className="col-5">
                <SkHeading size="xs" element="h5" color="#252e4e" label="ACV" />
              </th>
              <th className="col-6">
                <SkHeading
                  size="xs"
                  element="h5"
                  color="#252e4e"
                  label="Creators"
                />
              </th>
              <th className="col-7">
                <SkHeading
                  size="xs"
                  element="h5"
                  color="#252e4e"
                  label="Streams"
                />
              </th>
            </tr>
          </thead>
          <tbody className="tbody">
            {DATA?.data?.map((row: rowDataProps) => (
              <RankListItem key={row.id} rowData={row}/>
            ))}
          </tbody>
        </table>
      </Paper>
    </>
  );
};

export default RankList;
