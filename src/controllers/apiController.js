import { getFormStructure } from "@/services/apiService";

export async function sendFormData(prompt) {
    const payload = { prompt: prompt }
    const response = await getFormStructure(payload);
    return response.data;
}