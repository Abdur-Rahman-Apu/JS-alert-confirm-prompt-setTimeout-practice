
const result = confirm("Do you want to see your website location?");

if (result) {
    console.log(`Your website location is ${location.href}`);
}