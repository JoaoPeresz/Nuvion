import {Fragment} from "react";
import styles from "./home-page-header.module.css"
import NavigateBar from "@/src/frontend/components/molecules/navigate-bar";
import ButtonSignUp from "@/src/frontend/components/molecules/button-sign-up";

export default function HeaderDefault() {
    return (
        <Fragment>
            <section className={styles.containerPage}>
                <header className={styles.containerHeader}>
                    <div>logo</div>
                    <div className={styles.containerBoxHeader}>
                        <NavigateBar/>
                        <ButtonSignUp/>
                    </div>
                </header>
            </section>
        </Fragment>
    )
}