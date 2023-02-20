import { Card, Stack, Text } from "@sanity/ui";

export const CustomField = (props: any) => {
  const {
    description,
    title,
    onChange,
    validation,
    validationError,
    ...restProps
  } = props;

  return (
    <Card>
      <Stack space={3} paddingBottom={4}>
        <Text
          size={1}
          style={{ marginBottom: "6px", marginTop: "8px", display: "flex" }}
          weight={"medium"}
        >
          {title}
        </Text>

        {description && (
          <Text size={1} style={{ color: "#6E7683" }}>
            {description}
          </Text>
        )}
      </Stack>
      {props.renderDefault(restProps)}
    </Card>
  );
};
