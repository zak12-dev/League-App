"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ClassementTable from "@/app/classement/_components/ClassementTable";
import { teams } from "@/data/teams";

export default function ClassementPage() {
  const [selectedSeason, setSelectedSeason] = useState("2025");
  const [selectedConference, setSelectedConference] = useState("all");
  const [selectedGroup, setSelectedGroup] = useState("all");

  return (
    <div className="container   bg-gray-100">
      <div className="  px-8 py-17 bg-gradient-to-r from-white to-gray-300 ">
        {" "}
        <h1 className=" text-5xl font-bold"> Classement </h1>
      </div>
      <Card className="shadow-md">
        <CardContent>
          <ClassementTable />
        </CardContent>
      </Card>
    </div>
  );
}
