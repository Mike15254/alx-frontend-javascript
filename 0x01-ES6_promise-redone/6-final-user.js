import signupUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

async function handleProfileSignup(firstName, lastName, fileName) {
    const user = await signupUser(firstName, lastName).then((value) => ({
        status: "fullfiled",
        value,
    }));
    const photo = await uploadPhoto(fileName).catch((error) => ({
        status: "rejected",
        value: `${error.name}: ${error.message}`
    }));
    return [user.value, photo]
}

export default handleProfileSignup;