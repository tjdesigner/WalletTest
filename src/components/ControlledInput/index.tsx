import React, { ReactNode } from 'react'
import { Control, FieldError, Controller } from 'react-hook-form'
import MaskInput, { Mask } from 'react-native-mask-input';
import { ControllerContainer, ControllerContainerProps, Error, InputContainer, InputText, TextLabel } from './styles'
import theme from '../../global/styles/theme'

interface DefaultProps extends ControllerContainerProps {
    control: Control<any>
    name: string
    error?: FieldError
    label?: string
    icon?: ReactNode
    mask?: Mask
}

export function ControlledInput({ control, error, name, mask, ...rest }: DefaultProps) {

    return (
        <ControllerContainer>
            {Boolean(rest.label) && <TextLabel>{rest.label}</TextLabel>}
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <InputContainer>
                        {Boolean(rest.icon) && rest.icon}
                        <MaskInput
                            style={{ height: 50, paddingLeft: theme.spacesNumber.small, flex: 1 }}
                            mask={mask}
                            onChangeText={onChange}
                            value={value}
                            {...rest}
                            placeholderTextColor={theme.colors.textDisabled}
                        />
                    </InputContainer>
                )}
            />
            {error && <Error>{error.message}</Error>}
        </ControllerContainer>

    )
}