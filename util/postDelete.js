export const postDelete = (post_data) => {
  fetch("/api/delete/delete", {
    method: "DELETE", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post_data._id),
  })
    .then((res) => {
      if (res.ok) {
        window.location.href = "/list/1";
      } else {
        throw new Error("Error in delete");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
