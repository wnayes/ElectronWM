import React from "react";
import { Desktop, ErrorDisplay, WorkArea, ThemeContextProvider, useScreenIndex } from "@electron-wm/react";
import { ErrorBoundary } from "react-error-boundary";
import { Taskbar, TagList, TaskList, RunField, SystemTray, Clock, LayoutIndicator } from "@electron-wm/react-taskbar";
import { Wallpaper } from "@electron-wm/react-wallpaper";
import { MyTheme } from "../shared/theme";

export default () => {
  const screenIndex = useScreenIndex();
  return (
    <ThemeContextProvider theme={MyTheme}>
      <Desktop>
        <Taskbar height={20}>
          <TagList />
          <RunField />
          <TaskList />
          {screenIndex === 0 && <SystemTray />}
          <Clock />
          <LayoutIndicator />
        </Taskbar>
        <ErrorBoundary FallbackComponent={ErrorDisplay}>
          <WorkArea>
            <Wallpaper />
          </WorkArea>
        </ErrorBoundary>
      </Desktop>
    </ThemeContextProvider>
  );
};
