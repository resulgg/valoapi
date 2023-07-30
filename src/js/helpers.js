export const fetchURL = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
