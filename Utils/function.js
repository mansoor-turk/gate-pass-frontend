

export function generateUniqueId() {
    // Generate a unique ID
    const prefix = "iwgps_";
    const length = 10 - prefix.length;
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
        randomString += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return prefix + randomString;
}