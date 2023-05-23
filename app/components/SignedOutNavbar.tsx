import styles from '../page.module.scss';

export const SignedOutNavbar = () => {
	return (
		<div className={`${styles.SignedOutNavbar} ${styles.Navbar}`}>
			<h2 className={styles.Logo}>NavyStream</h2>

			<a>Sign In</a>
		</div>
	);
};
