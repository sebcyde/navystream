import ClipLoader from 'react-spinners/ClipLoader';
import styles from './page.module.scss';

export default function loading() {
	return (
		<div className={styles.LoadingContainer}>
			<ClipLoader
				size={150}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
}
