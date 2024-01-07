import React from "react";
import { Desktop, ErrorDisplay, WorkArea, ThemeContextProvider, useScreenIndex } from "@bond-wm/react";
import { ErrorBoundary } from "react-error-boundary";
import { DesktopEntries } from "@bond-wm/react-desktop-entries";
import { Taskbar, TagList, TaskList, SystemTray, Clock, LayoutIndicator } from "@bond-wm/react-taskbar";
import { Wallpaper } from "@bond-wm/react-wallpaper";
import { MyTheme } from "../theme";

export default () => {
  const screenIndex = useScreenIndex();
  return (
    <ThemeContextProvider theme={MyTheme}>
      <Desktop>
        <Taskbar height={20}>
          <TagList />
          <TaskList />
          {screenIndex === 0 && <SystemTray />}
          <Clock />
          <LayoutIndicator />
        </Taskbar>
        <ErrorBoundary FallbackComponent={ErrorDisplay}>
          <WorkArea>
            <Wallpaper />
            <DesktopEntries />
          </WorkArea>
        </ErrorBoundary>
      </Desktop>
    </ThemeContextProvider>
  );
};
