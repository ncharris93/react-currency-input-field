import { IntlConfig } from '../CurrencyInputProps';
export declare type FormatValueOptions = {
    /**
     * Value to format
     */
    value: string | undefined;
    /**
     * Decimal separator
     *
     * Default = '.'
     */
    decimalSeparator?: string;
    /**
     * Group separator
     *
     * Default = ','
     */
    groupSeparator?: string;
    /**
     * Turn off separators
     *
     * This will override Group separators
     *
     * Default = false
     */
    disableGroupSeparators?: boolean;
    /**
     * Intl locale currency config
     */
    intlConfig?: IntlConfig;
    /**
     * Specify decimal scale for padding/trimming
     *
     * Eg. 1.5 -> 1.50 or 1.234 -> 1.23
     */
    decimalScale?: number;
    /**
     * Prefix
     */
    prefix?: string;
    /**
     * Suffix
     */
    suffix?: string;
};
/**
 * Format value with decimal separator, group separator and prefix
 */
export declare const formatValue: (options: FormatValueOptions) => string;
