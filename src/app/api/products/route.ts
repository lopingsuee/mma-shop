import { NextRequest, NextResponse } from "next/server";

const data = require("../data.json");

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item: { id: number; }) => item.id === Number(id));

    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "not found",
        data: {},
      });
    }
  }

  return NextResponse.json({
    status: 200,
    message: "success",
    data,
  });
}