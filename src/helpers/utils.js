export const regexTest = (value, regex) => {
  return regex.test(value);
};

export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const arrayGenerator = lengthOfArray => {
  if (typeof lengthOfArray !== "number") {
    throw new Error("length of array has to be a number");
  } else {
    const array = [];
    for (let i = 0; i <= lengthOfArray; i++) {
      array.push(i);
    }
    return array;
  }
};
export const objectIsNullOrEmpty = obj => {
  const type = typeof obj;
  if (type === "object") {
    return isEmpty(obj);
  }
  return true;
};

export const parseJwt = token => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export const fileToBase64 = blob => {
  return new Promise(resolve => {
    var reader = new FileReader();

    reader.onload = (() => {
      return e => {
        var binaryData = e.target.result;
        resolve(window.btoa(binaryData));
      };
    })(blob);

    reader.readAsBinaryString(blob);
  });
};

/**
 * Returns an hsl color code based on a string, desired saturation and light.
 * @param name The unique string or name you want to generate a unique color code from
 * @param saturation desired saturation(from 0-100)
 * @param saturation desired lighting(from 0-100)
 */
export const getRandomColor = (name, saturation, light) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return "hsl(" + hue + ", " + saturation + "%, " + light + "%)";
};
