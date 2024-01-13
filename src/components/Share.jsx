import { useState, useEffect } from "react";

const Share = () => {
  const [clicked, setClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.onresize = handleResize;

    return () => {
      window.onresize = null;
    };
  }, []);

  return (
    <>
      {windowWidth <= 1024 ? (
        <>
          <div
            className={`${
              clicked ? "hidden" : "flex"
            } items-center gap-3 py-3 bg-white rounded-b-lg px-7`}
          >
            <div>
              <img
                src="./avatar-michelle.jpg"
                alt="profile image"
                width={27}
                height={27}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-darkGrayishBlue">
                Michelle Appleton
              </span>
              <span className="text-xs text-grayishBlue">28 Jun 2020</span>
            </div>
            <div className="flex justify-end flex-1">
              <button
                className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-lightGrayishBlue"
                onClick={handleClick}
              >
                <img
                  src="./icon-share.svg"
                  alt="share icon"
                  height={12}
                  width={12}
                />
              </button>
            </div>
          </div>
          <div
            className={`items-center ${
              clicked ? "flex" : "hidden"
            }  gap-3 py-3 rounded-b-lg bg-darkGrayishBlue px-7`}
          >
            <div className="flex items-center">
              <span className="text-[0.65em] font-thin uppercase spacing text-grayishBlue">
                share
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <button className="flex items-center justify-center rounded-full w-[25px] h-[25px]">
                <img
                  src="./icon-facebook.svg"
                  alt="share icon"
                  height={15}
                  width={15}
                />
              </button>
              <button className="flex items-center justify-center rounded-full w-[25px] h-[25px]">
                <img
                  src="./icon-twitter.svg"
                  alt="share icon"
                  height={15}
                  width={15}
                />
              </button>
              <button className="flex items-center justify-center rounded-full w-[25px] h-[25px]">
                <img
                  src="./icon-pinterest.svg"
                  alt="share icon"
                  height={15}
                  width={15}
                />
              </button>
            </div>
            <div className="flex justify-end flex-1">
              <button
                className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-grayishBlue"
                onClick={handleClick}
              >
                <img
                  src="./icon-share-active.svg"
                  alt="share icon"
                  height={12}
                  width={12}
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`flex items-center gap-3 py-3 bg-white px-7 lg:rounded-br-lg`}
          >
            <div>
              <img
                src="./avatar-michelle.jpg"
                alt="profile image"
                width={27}
                height={27}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-darkGrayishBlue">
                Michelle Appleton
              </span>
              <span className="text-xs text-grayishBlue">28 Jun 2020</span>
            </div>
            <div className="flex justify-end flex-1">
              <button
                className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-lightGrayishBlue"
                onClick={handleClick}
              >
                <img
                  src={clicked ? "./icon-share.svg" : "./icon-share.svg"}
                  alt="share icon"
                  height={12}
                  width={12}
                />
              </button>
            </div>
          </div>

          <div
            className={`items-center ${
              clicked ? "absolute" : "hidden"
            }  py-3 rounded-lg bg-darkGrayishBlue px-7 left-[335px] top-[100px] rounded-br-lg`}
          >
            <div className="flex gap-2 rounded-lg">
              <div className="flex items-center">
                <span className="text-[0.65em] font-thin uppercase spacing text-grayishBlue">
                  share
                </span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <button className="flex items-center justify-center rounded-full w-[25px] h-[25px]">
                  <img
                    src="./icon-facebook.svg"
                    alt="share icon"
                    height={15}
                    width={15}
                  />
                </button>
                <button className="flex items-center justify-center rounded-full w-[25px] h-[25px]">
                  <img
                    src="./icon-twitter.svg"
                    alt="share icon"
                    height={15}
                    width={15}
                  />
                </button>
                <button className="flex items-center justify-center rounded-full w-[25px] h-[25px]">
                  <img
                    src="./icon-pinterest.svg"
                    alt="share icon"
                    height={15}
                    width={15}
                  />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Share;
