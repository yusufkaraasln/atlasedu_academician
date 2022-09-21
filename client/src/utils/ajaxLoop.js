const postGenerator = async (faculty, list) => {
    const URL = `https://${faculty}.atlas.edu.tr/uploads/akademikkadro/`;

    return list.map(async (item) => {
      const post = {
        name: item.name,
        image: URL + item.image,
        info: item.bilgi,
        desc: item.ekgorev,
        ip: item.ip,
        faculty: faculty,
      };

      try {
        const res = await axios.post(
          `http://localhost:8080/api/academicians/add`,
          post
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    });
  };