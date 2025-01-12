"use client";

import { forwardRef } from "react";
import { Dimensions, ScrollView, ScrollViewProps, View } from "react-native";
import { useBottomTabOverflow } from "./TabBarBackground";
import * as AC from "@bacons/apple-colors";

export const BodyScrollView = forwardRef<any, ScrollViewProps>((props, ref) => {
  const paddingBottom = useBottomTabOverflow();

  return (
    <ScrollView
      automaticallyAdjustsScrollIndicatorInsets
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      contentInset={{ bottom: paddingBottom }}
      scrollIndicatorInsets={{ bottom: paddingBottom }}
      {...props}
      style={[
        {
          backgroundColor: AC.systemGroupedBackground,
        },
        props.style,
      ]}
      ref={ref}
    >
      {process.env.EXPO_OS == "web" ? (
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={{ maxWidth: 650, gap: 24, width: "100%" }}>
            {props.children}
          </View>
        </View>
      ) : (
        props.children
      )}
    </ScrollView>
  );
});
