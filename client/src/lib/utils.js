export function formatMessageTime(date) {
    return new Date(date).toLocaleTimeString("en-Us", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"

    })

}