import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface PaymentGatewayProps {
    isOpen: boolean;
    onClose: () => void;
    amount: number;
    onSuccess: (transactionId: string, method: string) => void;
}

const paymentMethods = [
    {
        id: 'gpay',
        name: 'Google Pay',
        logo: '🔵', // We'll use emoji for mock, you can replace with actual logos
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-600',
    },
    {
        id: 'phonepe',
        name: 'PhonePe',
        logo: '🟣',
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
        textColor: 'text-purple-600',
    },
    {
        id: 'razorpay',
        name: 'Razorpay',
        logo: '🔷',
        color: 'from-indigo-500 to-indigo-600',
        bgColor: 'bg-indigo-50',
        textColor: 'text-indigo-600',
    },
];

export function PaymentGateway({ isOpen, onClose, amount, onSuccess }: PaymentGatewayProps) {
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');

    const handlePayment = async () => {
        if (!selectedMethod) return;

        setIsProcessing(true);
        setPaymentStatus('processing');

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Generate mock transaction ID
        const transactionId = `TXN${Date.now()}${Math.random().toString(36).substring(7).toUpperCase()}`;

        setPaymentStatus('success');

        // Wait a bit to show success animation
        await new Promise(resolve => setTimeout(resolve, 1500));

        const methodName = paymentMethods.find(m => m.id === selectedMethod)?.name || selectedMethod;
        onSuccess(transactionId, methodName);

        // Reset state
        setIsProcessing(false);
        setPaymentStatus('idle');
        setSelectedMethod(null);
        onClose();
    };

    const handleClose = () => {
        if (!isProcessing) {
            setSelectedMethod(null);
            setPaymentStatus('idle');
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="max-w-sm mx-4">
                <DialogHeader>
                    <DialogTitle>
                        {paymentStatus === 'success' ? 'Payment Successful!' : 'Select Payment Method'}
                    </DialogTitle>
                </DialogHeader>

                {paymentStatus === 'success' ? (
                    <div className="py-8 text-center space-y-4">
                        <div className="mx-auto w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
                            <Check className="h-8 w-8 text-success" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-foreground">₹{amount} Added Successfully</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Your wallet has been credited
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 pt-4">
                        {/* Amount Display */}
                        <div className="bg-primary/5 rounded-xl p-4 text-center">
                            <p className="text-sm text-muted-foreground mb-1">Amount to Pay</p>
                            <p className="text-3xl font-bold text-foreground">₹{amount}</p>
                        </div>

                        {/* Payment Methods */}
                        <div className="space-y-3">
                            <p className="text-sm font-medium text-muted-foreground">Choose payment method</p>
                            {paymentMethods.map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => setSelectedMethod(method.id)}
                                    disabled={isProcessing}
                                    className={cn(
                                        'w-full p-4 rounded-xl border-2 transition-all duration-200',
                                        'flex items-center gap-4 hover:shadow-md',
                                        selectedMethod === method.id
                                            ? `border-${method.textColor.replace('text-', '')} ${method.bgColor} shadow-sm`
                                            : 'border-border bg-card hover:border-primary/30',
                                        isProcessing && 'opacity-50 cursor-not-allowed'
                                    )}
                                >
                                    <div className={cn(
                                        'w-12 h-12 rounded-full flex items-center justify-center text-2xl',
                                        selectedMethod === method.id ? method.bgColor : 'bg-secondary'
                                    )}>
                                        {method.logo}
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className="font-semibold text-foreground">{method.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {method.id === 'gpay' && 'UPI • Fast & Secure'}
                                            {method.id === 'phonepe' && 'UPI • Instant Payment'}
                                            {method.id === 'razorpay' && 'Cards • UPI • Wallets'}
                                        </p>
                                    </div>
                                    {selectedMethod === method.id && (
                                        <div className={cn('w-6 h-6 rounded-full flex items-center justify-center', method.bgColor)}>
                                            <Check className={cn('h-4 w-4', method.textColor)} />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Pay Button */}
                        <Button
                            onClick={handlePayment}
                            disabled={!selectedMethod || isProcessing}
                            className="w-full h-12 text-lg"
                            size="lg"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Processing Payment...
                                </>
                            ) : (
                                `Pay ₹${amount}`
                            )}
                        </Button>

                        {/* Security Note */}
                        <p className="text-xs text-center text-muted-foreground">
                            🔒 Your payment is secured with 256-bit encryption
                        </p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
