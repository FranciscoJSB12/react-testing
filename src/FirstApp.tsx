interface Props {
  title: string;
  subTitle?: string;
  name?: string;
}

export const FirstApp = ({
  title,
  subTitle = 'No hay subtítulo',
  name = 'Francisco',
}: Props) => {
  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};
