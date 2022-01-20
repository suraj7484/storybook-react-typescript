import React from "react";
import { useNavigate } from "react-router";
import { SkPara, SkHeading, Avatar } from "../../../components";
import "./RankListItem.css";

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

type Props = {
  rowData: rowDataProps;
};

const RankListItem = ({ rowData }: Props) => {
  const navigate = useNavigate();
  return (
    <tr className="table-row" onClick={() => navigate("/" + rowData.id)}>
      <td className="col-1">
        <SkPara size="xs" color="#252e4e" label={rowData.id} />
      </td>
      <td className="col-2">
        <Avatar
          imgSrc="https://via.placeholder.com/150x200"
          size="sm"
          round={5}
        />
        {"  "}
        <SkPara size="xs" color="#252e4e" bold={500} label={rowData.name} />
      </td>
      <td className="col-3">
        <SkPara
          size="xs"
          color="#252e4e"
          bold={500}
          label={rowData.view_hours}
        />
      </td>
      <td className="col-4">
        <SkPara
          size="xs"
          color="#252e4e"
          bold={500}
          label={rowData.hours_streamed}
        />
      </td>
      <td className="col-5">
        <SkPara size="xs" color="#252e4e" bold={500} label={rowData.acv} />
      </td>
      <td className="col-6">
        <SkPara size="xs" color="#252e4e" bold={500} label={rowData.creators} />
      </td>
      <td className="col-7">
        <SkPara size="xs" color="#252e4e" bold={500} label={rowData.streams} />
      </td>
    </tr>
  );
};

export default RankListItem;
