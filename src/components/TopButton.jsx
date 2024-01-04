import { createPortal } from "react-dom";

const TopButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    window.onscroll = () => {
        const btn = document.getElementById("top-button-root");
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    }

    return createPortal(
        <div id="top-button-root" onClick={scrollToTop}>
            <i className="fa-solid fa-chevron-up"></i>
        </div>,
        document.getElementById("root")
    );
}

export default TopButton;