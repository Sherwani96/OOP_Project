import chalkAnimation from "chalk-animation";

// sleep func
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2500);
    });
};

// welcome func
async function welcome() {
    let title = chalkAnimation.rainbow(`                   Client Authentication App\n`);
    await sleep();
    title.stop();
}

export { welcome };