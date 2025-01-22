"use server";

import { ActivityIndicator, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React, { Suspense } from "react";
import renderQRCode from "@/actions/render-qr-code";

export default function QRPage() {
  const { slug } = useLocalSearchParams();
  const url = decodeURIComponent(String(slug));

  return (
    <View></View>
  );
}
