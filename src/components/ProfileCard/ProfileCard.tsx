import styles from './ProfileCard.module.css'

interface Props {
  avatar: string;
  name: string;
  description: string;
}

export default function ProfileCard(props: Props) {
  const { avatar, name, description } = props;
  return (
    <div className={styles.profileCard}>
      <img src={avatar} alt="User avatar" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};