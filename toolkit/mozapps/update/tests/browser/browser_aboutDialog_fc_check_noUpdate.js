/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

// Test for About Dialog foreground check for updates
// with no update available.
add_task(async function aboutDialog_foregroundCheck_noUpdate() {
  let updateParams = "&noUpdates=1";
  await runAboutDialogUpdateTest(updateParams, false, [
    {
      panelId: "checkingForUpdates",
      checkActiveUpdate: null,
      continueFile: CONTINUE_CHECK,
    },
    {
      panelId: "noUpdatesFound",
      checkActiveUpdate: null,
      continueFile: null,
    },
  ]);
});
