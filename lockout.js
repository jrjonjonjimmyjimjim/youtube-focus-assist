let targetURL = window.location.href;

/*
Restriction levels:
2 - Block youtube. Ask user if they want to proceed anyway.
1 - Block suggestions. (Maybe comments as well?)
0 - No restriction.
*/
let restriction_level = 2;
chrome.storage.local.get(['restriction_level'], function(result) {
    if (result != null && result.restriction_level != null) {
        restriction_level = result.restriction_level;
    }
});

if (restriction_level == 2) {
    window.location.replace('lockout.html');

} else if (restriction_level == 1) {
    // Block suggestions
}
