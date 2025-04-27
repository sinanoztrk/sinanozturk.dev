"use client";

import useMergedRef from "@/hooks/useMergedRef";
import { useScrollToTop } from "@/hooks/useTabToTop";
import * as AC from "@bacons/apple-colors";
import { forwardRef, useRef } from "react";
import { ScrollViewProps, View } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabOverflow } from "./TabBarBackground";

export const BodyScrollView = forwardRef<any, ScrollViewProps>((props, ref) => {
  const paddingBottom = useBottomTabOverflow();
  const scrollRef = useRef<Animated.ScrollView>(null);

  const statusBarInset = useSafeAreaInsets().top; // inset of the status bar

  const largeHeaderInset = statusBarInset + 92; // inset to use for a large header since it's frame is equal to 96 + the frame of status bar

  useScrollToTop(scrollRef, -largeHeaderInset);

  const merged = useMergedRef(scrollRef, ref as any);

  return (
    <Animated.ScrollView
      scrollToOverflowEnabled
      automaticallyAdjustsScrollIndicatorInsets
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      contentInset={{ bottom: paddingBottom }}
      scrollIndicatorInsets={{ bottom: paddingBottom }}
      {...props}
      style={[{ backgroundColor: AC.systemGroupedBackground }, props.style]}
      ref={merged}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            maxWidth: 650,
            gap: 24,
            width: "100%",
          }}
        >
          {props.children}
        </View>
      </View>
    </Animated.ScrollView>
  );
});

if (__DEV__) {
  BodyScrollView.displayName = "BodyScrollView";
}
